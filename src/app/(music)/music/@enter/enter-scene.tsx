import Canvas from "@/components/canvas";
import EnterSphere from "./enter-sphere";

export default function EnterScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <EnterSphere />
    </Canvas>
  );
}
