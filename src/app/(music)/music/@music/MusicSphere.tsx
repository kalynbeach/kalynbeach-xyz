'use client'

import { Mesh } from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

export default function MusicSphere() {
  const meshRef = useRef<Mesh>(null)
  const color = '#1AE803'

  useFrame(() => {
    if (!meshRef.current) return

    meshRef.current.rotation.x += 0.0005
    meshRef.current.rotation.y += 0.0005
  })

  return (
    <Sphere ref={meshRef} scale={6}>
      <meshStandardMaterial
        color={color}
        wireframe
      />
    </Sphere>
  )
}