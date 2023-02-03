import Link from "next/link";

async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPost`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

export default async function Home() {
  const data: { id: number; title: string }[] = await getPost();
  console.log(data);

  return (
    <div>
      <Link href={"/dashboard"}>Go to dashboard</Link>
      {data.map((post) => (
        <h1 className="text-lg py-6">{post.title}</h1>
      ))}
    </div>
  );
}
