function ColumnCard({ children }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg p-5 bg-secondary transition-all duration-200 hover:shadow-xl">
      {children}
    </div>
  );
}

export default ColumnCard;
