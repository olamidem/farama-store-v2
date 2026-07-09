interface DataTableEmptyProps {
  colSpan: number;
  message?: string;
}

const DataTableEmpty = ({
  colSpan,
  message = "No records found.",
}: DataTableEmptyProps) => {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="py-16 text-center text-sm text-slate-400"
      >
        {message}
      </td>
    </tr>
  );
};

export default DataTableEmpty;
