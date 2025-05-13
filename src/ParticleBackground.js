import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0000ff, 0.001);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      5,
      2000
    );
    camera.position.z = 500;

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const size = 2000;

    for (let i = 0; i < 3000; i++) {  // dati: 20000
      const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      vertices.push(x, y, z);
    }
    

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    const material = new THREE.PointsMaterial({ size: 2, color: 0xffffff });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    renderer.domElement.style.display = "block"; // remove inline spacing

    mountRef.current.appendChild(renderer.domElement);

    const onPointerMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      scene.rotation.x += 0.001;
      scene.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed", // better than absolute for full background
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
  
};

export default ParticleBackground;
