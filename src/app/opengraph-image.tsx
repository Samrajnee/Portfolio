import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", backgroundColor: "#F6F4EF", fontFamily: "serif" }}>
        <div style={{ display: "flex", fontSize: 72, color: "#1A1A18", lineHeight: 1.1, maxWidth: "900px" }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#5C5A54", marginTop: 24, fontFamily: "sans-serif" }}>{`${profile.role} · ${profile.location}`}</div>
        <div style={{ display: "flex", marginTop: 48, width: 80, height: 3, backgroundColor: "#8A6D3B" }} />
      </div>
    ),
    { ...size }
  );
}