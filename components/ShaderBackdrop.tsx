'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function InkPlane() {
  const material = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uAccent: { value: new THREE.Color('#9f2d20') } }), []);

  useFrame((_, delta) => {
    if (material.current) material.current.uniforms.uTime.value += delta;
  });

  return (
    <mesh position={[0, 0, -1]}>
      <planeGeometry args={[7, 4, 64, 64]} />
      <shaderMaterial
        ref={material}
        transparent
        uniforms={uniforms}
        vertexShader={`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }`}
        fragmentShader={`
          precision mediump float;
          uniform float uTime;
          uniform vec3 uAccent;
          varying vec2 vUv;
          float band(vec2 uv){ return sin((uv.x * 4.0 + uv.y * 6.0 + uTime * .35)) * .5 + .5; }
          void main(){
            float ribbon = smoothstep(.42,.72, band(vUv + vec2(sin(uTime*.15)*.05,0.0)));
            float scan = step(.96, fract(vUv.y * 72.0 + uTime * 1.8));
            vec3 ink = mix(vec3(.08,.06,.045), uAccent, .45);
            float alpha = ribbon * .18 + scan * .045;
            gl_FragColor = vec4(ink, alpha);
          }
        `}
      />
    </mesh>
  );
}

export function ShaderBackdrop() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!enabled) return <div className="absolute inset-0 bg-scanlines opacity-30" aria-hidden="true" />;
  return (
    <Canvas className="absolute inset-0" orthographic camera={{ position: [0, 0, 1], zoom: 1 }} aria-hidden="true">
      <InkPlane />
    </Canvas>
  );
}
