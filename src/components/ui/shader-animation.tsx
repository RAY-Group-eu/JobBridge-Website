"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2() },
            u_mouse: { value: new THREE.Vector2() },
        };

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        varying vec2 vUv;

        void main() {
          vec2 st = vUv;
          vec3 color = vec3(0.0);
          
          float t = u_time * 0.1;
          
          color = vec3(st.x, st.y, abs(sin(t)));
          
          // Smooth gradient effect
          vec3 color1 = vec3(0.043, 0.086, 0.141); // Darker Blue/Cyan Base (#0b1624 approx)
          vec3 color2 = vec3(0.0, 0.0, 0.0); // Black
          
          float mixValue = distance(st, vec2(0.5, 0.5));
          color = mix(color1, color2, mixValue * 1.5 + sin(t) * 0.2);
          
          // Subtle shimmer
          float shimmer = 0.0;
          shimmer += sin(st.x * 10.0 + t) * 0.02;
          shimmer += sin(st.y * 10.0 + t * 1.5) * 0.02;
          color += shimmer;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.u_resolution.value.x = renderer.domElement.width;
            uniforms.u_resolution.value.y = renderer.domElement.height;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        let animationId: number;
        const animate = () => {
            uniforms.u_time.value += 0.05;
            renderer.render(scene, camera);
            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 -z-10 w-full h-full bg-black" />;
}
