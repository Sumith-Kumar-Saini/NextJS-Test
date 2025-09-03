import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-2xl">Product Not Found</h2>
      <p className="text-xl">
        The product you were looking for does not exist.
      </p>
      <Link href="/products" className="text-blue-400">
        Go back to products
      </Link>
    </div>
  );
}
