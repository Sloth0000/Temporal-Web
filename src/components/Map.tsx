"use client"; // This directive marks this as a Client Component

import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[17.3850, 78.4867]} // Centered on Hyderabad
      zoom={10}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false} // We can add custom controls later
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}