/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

//Create a row: RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

//Call CRUD.insertRow(row) and store the result
const newRowID: RowID = CRUD.insertRow(row);

console.log(`Inserted row with ID: ${newRowID}`);

//Create const updatedRow: RowElement that adds age: 23
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

//Call CRUD.updateRow(newRowID, updatedRow);
CRUD.updateRow(newRowID, updatedRow);

//Call CRUD.deleteRow(newRowID);
CRUD.deleteRow(newRowID);
