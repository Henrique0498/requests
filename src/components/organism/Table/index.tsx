"use client";

import {
  Table as TableNextUi,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  TableProps,
} from "@nextui-org/table";

interface InTable extends TableProps {
  columns: { [key: string]: any }[];
  rows: { [key: string]: any }[];
}

export default function Table({ columns, rows, ...props }: InTable) {
  return (
    <TableNextUi {...props}>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.id}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"Sem resultados."}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </TableNextUi>
  );
}
