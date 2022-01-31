import { useEffect, useRef } from "react";
import { chakra, Flex } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Model3d = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 300,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    const light = new THREE.AmbientLight(0xffffff, 5); // soft white light
    scene.add(light);
    const loader = new GLTFLoader();
    loader.load(
      // resource URL
      "/assets/car.gltf",
      // called when the resource is loaded
      function (gltf) {
        scene.add(gltf.scene);
        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
        gltf.scene.translateY(-0.6);
        gltf.scene.rotateY(45);
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    renderer.setSize(window.innerWidth, 300);

    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 2.8;
    camera.position.y = 0.8;
    controls.update();

    var animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
    return () => mountRef.current.removeChild(renderer.domElement);
  }, []);

  return (
    <Flex alignContent={"center"} alignItems={"center"}>
      <chakra.div m="auto" ref={mountRef}></chakra.div>
    </Flex>
  );
};

export default Model3d;
