import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main className="container mx-auto px-3.5 py-4">
       <h1 className="text-2xl text-blue-400 font-bold mb-1">Apply to Static Site Generation</h1>
       <Blog />
    </main>
  );
}
