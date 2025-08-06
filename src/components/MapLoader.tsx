// src/components/MapLoader.tsx

"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

export default function MapLoader() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'), // <-- Use the alias with lowercase 'c'
    { 
      loading: () => <p>A map is loading...</p>,
      ssr: false
    }
  ), []);

  return <Map />;
}