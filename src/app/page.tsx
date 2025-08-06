// src/app/page.tsx

import MapLoader from "@/components/MapLoader"; // <-- Use lowercase 'c' here

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <MapLoader />
    </main>
  );
}