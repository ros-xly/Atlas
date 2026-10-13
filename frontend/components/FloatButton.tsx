export default function FloatButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="float-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}