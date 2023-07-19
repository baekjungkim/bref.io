// 'use client';

async function getData() {
  // 1 endpoint - API?
  const endpoint = 'http://localhost:3000/api/posts'; // -> third party api
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Errror('Failed to fetch data');
  }
  return res.json();
}

export default async function BlogPage() {
  const data = await getData();
  const items = data && data.items ? [...data.items] : [];
  console.log(items);
  return (
    <main>
      <h1>Hello World</h1>
      <p>Posts : </p>
      {items &&
        items.map((item, idx) => {
          return <li key={`post-${idx}`}>{item.title}</li>;
        })}
    </main>
  );
}