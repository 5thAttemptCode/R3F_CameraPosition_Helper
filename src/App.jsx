import { Canvas } from '@react-three/fiber'
import React from 'react'
import CameraPosition from './CameraHelper'
import { OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas camera={{position: [-5, 2, 10], fov: 75}}>
      <OrbitControls />
      <CameraPosition event="mousedown" />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

