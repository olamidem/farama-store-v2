interface ProductAvatarProps {
  name: string;
}

export const ProductAvatar = ({ name }: ProductAvatarProps) => {
  const firstLetter = name ? name.trim().charAt(0).toUpperCase() : "P";

  // Generate a steady color for the initials based on the name
  const getColorClass = (str: string) => {
    const hash = str
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const colors = [
      "bg-emerald-50 text-emerald-700 border-emerald-100",
      "bg-blue-50 text-blue-700 border-blue-100",
      "bg-amber-50 text-amber-700 border-amber-100",
      "bg-indigo-50 text-indigo-700 border-indigo-100",
      "bg-purple-50 text-purple-700 border-purple-100",
      "bg-rose-50 text-rose-700 border-rose-100",
      "bg-sky-50 text-sky-700 border-sky-100",
    ];
    return colors[hash % colors.length];
  };

  const colorClass = getColorClass(name);

  return (
    <div
      className={`h-10 w-10 shrink-0 flex items-center justify-center rounded-xl border text-sm font-bold uppercase select-none ${colorClass}`}
    >
      {firstLetter}
    </div>
  );
};
