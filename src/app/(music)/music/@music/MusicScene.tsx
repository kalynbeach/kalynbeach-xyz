import Canvas from "@/components/canvas";
import MusicSphere from "./MusicSphere";

export default function MusicScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <MusicSphere />
    </Canvas>
  );
}
