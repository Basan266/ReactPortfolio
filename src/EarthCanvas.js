import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EarthCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha makes background transparent
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // transparent background
    mount.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Texture loader
    const textureLoader = new THREE.TextureLoader();

    // Earth mesh
    const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      bumpScale: 0.05,
      specular: new THREE.Color('grey'),
      shininess: 10,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Load textures
    textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthmap1k.jpg', (map) => {
      earthMaterial.map = map;
      earthMaterial.needsUpdate = true;
    });

    textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthbump1k.jpg', (bumpMap) => {
      earthMaterial.bumpMap = bumpMap;
      earthMaterial.needsUpdate = true;
    });

    textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/141228/earthspec1k.jpg', (specularMap) => {
      earthMaterial.specularMap = specularMap;
      earthMaterial.needsUpdate = true;
    });

    // Camera position
    camera.position.set(1, 1, 1);
    camera.lookAt(scene.position);

    // Resize handler
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    const animate = () => {
      earth.rotation.y += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '30vw', height: '50vh', background: 'transparent' }} />;
};

export default EarthCanvas;
