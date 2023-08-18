import Canvas from './Canvas'
import EnterSphere from './EnterSphere'

export default function EnterScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <EnterSphere />
    </Canvas>
  )
}