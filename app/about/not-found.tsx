import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-2xl">Product Not Found</h2>
      <p className="text-xl">
        The about you were looking for does not exist.
      </p>
      <Link href="/about" className="text-blue-400">
        Go back to products
      </Link>
    </div>
  );
}
