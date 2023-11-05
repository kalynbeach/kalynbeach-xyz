"use client";

import Canvas from "@/components/canvas";

type MusicCanvasProps = {
  children: React.ReactNode;
};

export default function MusicCanvas({ children }: MusicCanvasProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
}