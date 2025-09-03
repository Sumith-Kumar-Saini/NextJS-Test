"use client"
import { useParams } from "next/navigation";

interface ProfileParams {
  [key: string]: string | string[];
}

const Page = () => {
  const { slug } = useParams<ProfileParams>();
  return <div className="py-4 text-3xl">Slug: {[slug].flat().join("/")}</div>;
};

export default Page;
