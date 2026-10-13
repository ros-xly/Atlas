import Link from "next/link";

export default function FloatingActionButton({
  href,
}: {
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="
          fixed
          bottom-24
          right-6
          w-14
          h-14
          rounded-full
          bg-pink-500
          text-white
          text-3xl
          flex
          items-center
          justify-center
          shadow-lg
        "
      >
        +
      </div>
    </Link>
  );
}