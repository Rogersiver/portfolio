import { useEffect, useRef, useState } from "react";
import { chakra, Spinner, Center } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Model3d = () => {
  const mountRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / 275,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true;
    // const light = new THREE.AmbientLight(0xffffff, 10); // soft white light
    // scene.add(light);

    const manager = new THREE.LoadingManager();
    manager.onStart = function (url, itemsLoaded, itemsTotal) {};

    manager.onLoad = function () {
      setLoading(false);
      mountRef.current.appendChild(renderer.domElement);
    };

    const light2 = new THREE.DirectionalLight(0xffffff, 5);
    light2.position.set(1, 4, -3);
    light2.castShadow = true;
    light2.shadow.camera.top = 2;
    light2.shadow.camera.bottom = -2;
    light2.shadow.camera.left = -2;
    light2.shadow.camera.right = 2;
    light2.shadow.camera.near = 0.1;
    light2.shadow.camera.far = 14;
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 6);
    light3.position.set(-1, 3, 3);
    light3.castShadow = true;
    light3.shadow.camera.top = 2;
    light3.shadow.camera.bottom = -2;
    light3.shadow.camera.left = -2;
    light3.shadow.camera.right = 2;
    light3.shadow.camera.near = 0.1;
    light3.shadow.camera.far = 14;
    scene.add(light3);

    const loader = new GLTFLoader(manager);

    loader.load(
      // resource URL
      "/assets/car.gltf",
      // called when the resource is loaded
      function (gltf) {
        gltf.scene.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true;
          }
        });
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

    const planeGeo = new THREE.PlaneGeometry(2000, 2000);
    planeGeo.rotateX(-Math.PI / 2);

    // const planeMat = new THREE.ShadowMaterial();
    // planeMat.opacity = 0.5;
    const planeMat = new THREE.ShadowMaterial();
    planeMat.opacity = 0.2;

    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.position.y = -0.6;
    plane.receiveShadow = true;
    scene.add(plane);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = 1.5;
    controls.minPolarAngle = 1;
    controls.autoRotateSpeed = -2;
    renderer.setSize(window.innerWidth, 275);
    // mountRef.current.appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / 275;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, 275);
    }

    camera.position.z = 15;
    camera.position.y = 3;
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
    <chakra.div alignContent={"center"} alignItems={"center"}>
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      {!isLoading && <chakra.div m="auto" ref={mountRef}></chakra.div>}
    </chakra.div>
  );
};

export default Model3d;
