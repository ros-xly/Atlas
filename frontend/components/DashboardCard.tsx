export default function DashboardCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h2 className="font-semibold mb-2">
        {title}
      </h2>

      {children}
    </div>
  );
}