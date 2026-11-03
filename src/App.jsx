import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'

const agents = [
  { nama: 'Claude', warna: '#d97757', pos: [-3, 0, -2] },
  { nama: 'Flow', warna: '#4f8cff', pos: [3, 0, -2] },
  { nama: 'Gemini', warna: '#8e63ff', pos: [-3, 0, 2.5] },
  { nama: 'Hermes', warna: '#2dbf8a', pos: [3, 0, 2.5] },
]

function Meja({ nama, warna, pos }) {
  const kaki = [[-0.9, -0.4], [0.9, -0.4], [-0.9, 0.4], [0.9, 0.4]]
  return (
    <group position={pos}>
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
      {kaki.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.37, z]}>
          <boxGeometry args={[0.1, 0.75, 0.1]} />
          <meshStandardMaterial color="#5c3a1a" />
        </mesh>
      ))}
      <mesh position={[0, 1.15, -0.2]}>
        <boxGeometry args={[0.9, 0.55, 0.05]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0, 1.15, -0.17]}>
        <planeGeometry args={[0.8, 0.45]} />
        <meshStandardMaterial color={warna} emissive={warna} emissiveIntensity={0.6} />
      </mesh>
      <group position={[0, 0, 1.1]}>
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.6, 16]} />
          <meshStandardMaterial color={warna} />
        </mesh>
        <mesh position={[0, 1.0, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color="#ffe0bd" />
        </mesh>
        <Html position={[0, 1.5, 0]} center distanceFactor={8}>
          <div style={{ background: 'rgba(0,0,0,.65)', color: '#fff', padding: '2px 8px', borderRadius: 6, fontSize: 14, whiteSpace: 'nowrap' }}>
            {nama}
          </div>
        </Html>
      </group>
    </group>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 7, 10], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} />
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 10]} />
        <meshStandardMaterial color="#d9d4c7" />
      </mesh>
      {agents.map((a) => <Meja key={a.nama} {...a} />)}
      <OrbitControls />
    </Canvas>
  )
}
