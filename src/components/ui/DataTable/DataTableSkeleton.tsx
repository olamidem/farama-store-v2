interface DataTableSkeletonProps {
  rows?: number;
  columns?: number;
}

const DataTableSkeleton = ({
  rows = 6,
  columns = 6,
}: DataTableSkeletonProps) => {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="border-b">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className="px-4 py-4">
              <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default DataTableSkeleton;
