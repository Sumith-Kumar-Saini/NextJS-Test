"use client";
import { notFound, useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  if (id === "true") return notFound();
  return <div className="text-5xl">page {id}</div>;
};

export default Page;
