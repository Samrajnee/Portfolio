import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  let photoBase64: string | null = null;

  try {
    const photoPath = path.join(process.cwd(), "public", "photo-icon.jpg");
    const photoBuffer = fs.readFileSync(photoPath);
    photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;
  } catch (err) {
    console.error("icon.tsx: failed to read public/photo-icon.jpg -", err);
  }

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", borderRadius: "50%", overflow: "hidden", backgroundColor: "#8A6D3B", alignItems: "center", justifyContent: "center" }}>
        {photoBase64 ? (
          <img src={photoBase64} width={size.width} height={size.height} style={{ display: "flex", objectFit: "cover", width: "100%", height: "100%" }} />
        ) : (
          <div style={{ display: "flex", fontSize: 28, color: "#F6F4EF", fontFamily: "serif" }}>SB</div>
        )}
      </div>
    ),
    { ...size }
  );
}