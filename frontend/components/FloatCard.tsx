export default function FloatCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="float-card">
      {children}
    </div>
  );
}