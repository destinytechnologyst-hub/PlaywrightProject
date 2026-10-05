import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ExcelJS from 'exceljs';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const workbookPath = path.join(currentDirectory, 'loginTestData.xlsx');

/**
 * Reads a row from an Excel workbook by its worksheet and row ID.
 */
export async function readExcelData(sheetName, rowId) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(workbookPath);
  const worksheet = workbook.getWorksheet(sheetName);

  if (!worksheet) {
    throw new Error(`Worksheet "${sheetName}" was not found in loginTestData.xlsx.`);
  }

  const headers = worksheet.getRow(1).values.slice(1).map((value) => String(value ?? '').trim());
  const rowIdColumn = headers.indexOf('rowId') + 1;

  if (rowIdColumn === 0) {
    throw new Error(`Worksheet "${sheetName}" must contain a "rowId" column.`);
  }

  let dataRow;
  const rows = worksheet.getRows(2, Math.max(worksheet.rowCount - 1, 0));

  if (rows) {
    for (const row of rows) {
      const currentRowId = String(row.getCell(rowIdColumn).text).trim();

      if (currentRowId === String(rowId)) {
        dataRow = row;
        break;
      }
    }
  }

  if (!dataRow) {
    throw new Error(`Test data row "${rowId}" was not found in worksheet "${sheetName}".`);
  }

  return Object.fromEntries(
    headers.map((header, index) => [header, dataRow.getCell(index + 1).text.trim()])
  );
}
