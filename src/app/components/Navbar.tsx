import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-8 px-10">
      <Link
        href={"/"}
        className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
