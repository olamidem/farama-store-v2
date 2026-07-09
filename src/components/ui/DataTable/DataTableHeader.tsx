import { flexRender, type HeaderGroup } from "@tanstack/react-table";

interface DataTableHeaderProps<T> {
  headerGroups: HeaderGroup<T>[];
}

const DataTableHeader = <T,>({ headerGroups }: DataTableHeaderProps<T>) => {
  return (
    <thead className="sticky top-0 z-10 bg-slate-50">
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="border-b border-slate-200">
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="whitespace-nowrap px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default DataTableHeader;
