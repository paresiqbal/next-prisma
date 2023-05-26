async function getPost() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPost`);
  if (!res.ok) {
    console.log(res);
  }

  return res.json();
}

export default async function Home() {
  const data = await getPost();

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
