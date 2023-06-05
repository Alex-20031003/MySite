let scene;
let camera;
let renderer;

function init(){
  let container = document.querySelector('.3d-model');


  //scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff);


  //camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.z = 200;
  camera.position.y = 50;
  camera.position.x = 0;


  //render
  renderer = new THREE.WebGLRenderer({antialias: true})
  renderer.setSize(window.innerWidth, window.innerWidth)
  container.appendChild(renderer.domElement)


 //light
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(animate)

  let ligth = new THREE.PointLight(0xc4c4c4, 1);
  ligth.position.set(0, 300, 500);
  scene.add(ligth)

  let ligth2 = new THREE.PointLight(0xc4c4c4, 1);
  ligth2.position.set(500, 300, 500);
  scene.add(ligth2)

  //model
  const loader = new THREE.GLTFLoader();
  loader.load('Project/www/model/scene.gltf', gltf => {
    scene.add(gltf.scene);

  },
      function (error) {
        console.log('Error: ' + error)

      }
  
  )


  function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

  }
  animate();

}