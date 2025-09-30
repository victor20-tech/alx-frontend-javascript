import { RowID, RowElement } from './interface';





/**
 * Inserts a new row and returns its ID.
 * @param row The data for the new row.
 */
export function insertRow(row: RowElement): RowID;

/**
 * Deletes a row by its ID.
 * @param rowId The ID of the row to delete.
 */
export function deleteRow(rowId: RowID): void;

/**
 * Updates an existing row.
 * @param rowId The ID of the row to update.
 * @param row The new data for the row.
 */
export function updateRow(rowId: RowID, row: RowElement): RowID;