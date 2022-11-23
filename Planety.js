const colors = [ 0xFF0000, 0x00FF00, 0x0000FF, 0xFF6347, 0x228B22, 0x1E90FF,
 0xDDDDDD, 0x000000, 0x993300, 0x33cc33, 0x009933, 0x993333, 0x4C4E4F, 0xA9A9A9, 0x7F7E7E ];
 
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 3000 );
var cameraDistance = 50;
var angleX = 0;
var angleY = 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor( new THREE.Color( 0xcceecc ) );
document.getElementsByTagName('body')[0].appendChild( renderer.domElement );

const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();

var ambL = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.8 );
			scene.add(ambL);

const geometry = new THREE.SphereGeometry( 4, 32, 32 );

var sun = new THREE.Group();
var sunG = new THREE.SphereGeometry( 10, 36, 36);
var sunT = new THREE.TextureLoader().load( 'textures/sun.png' );
var sunM = new THREE.Mesh( sunG, new THREE.MeshBasicMaterial({ color: 0xffffff, map: sunT }) );
sun.add(sunM);
var sunL = new THREE.PointLight( 0xffffff, 1, 1000 );
sunL.castShadow = true;
sun.add( sunL );
var spriteMaterial = new THREE.SpriteMaterial( 
{ 
	map: new THREE.TextureLoader().load( 'textures/glow.png' ), 
	useScreenCoordinates: false/*, alignment: THREE.SpriteAlignment.center*/,
	color: 0xffff70, transparent: true, blending: THREE.AdditiveBlending
});
var sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(30, 30, 1.0);
sunM.add(sprite);
			
var mercury = new THREE.Group();
var mercuryG = new THREE.SphereGeometry( 1.5, 36, 36);
var mercuryT = new THREE.TextureLoader().load( 'textures/merkury1.jpg' );
var mercuryM = new THREE.Mesh( mercuryG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: mercuryT }) );
mercuryM.position.x = 15;
mercuryM.castShadow = true;
mercury.add(mercuryM);

var wenus = new THREE.Group();
var wenusG = new THREE.SphereGeometry( 4, 36, 36);
var wenusT = new THREE.TextureLoader().load( 'textures/venusmap.jpg' );
var wenusM = new THREE.Mesh( wenusG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: wenusT }) );
wenusM.position.x = 25;
wenusM.castShadow = true;
wenusM.receiveShadow = true;
wenus.add(wenusM);
		
var ziemia = new THREE.Group();
var ziemiaG = new THREE.SphereGeometry( 5, 36, 36);
var ziemiaT = new THREE.TextureLoader().load( 'textures/earthmap.jpg' );
var ziemiaM = new THREE.Mesh( ziemiaG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: ziemiaT }) );
ziemiaM.position.x = 50;
ziemiaM.castShadow = true;
ziemiaM.receiveShadow = true;
ziemia.add(ziemiaM);

var mars = new THREE.Group();
var marsG = new THREE.SphereGeometry( 3, 36, 36);
var marsT = new THREE.TextureLoader().load( 'textures/mars.jpg' );
var marsM = new THREE.Mesh( marsG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: marsT }) );
marsM.position.x = 75;
marsM.castShadow = true;
marsM.receiveShadow = true;
mars.add(marsM);

var jowisz = new THREE.Group();
var jowiszG = new THREE.SphereGeometry( 40, 36, 36);
var jowiszT = new THREE.TextureLoader().load( 'textures/jowisz.jpg' );
var jowiszM = new THREE.Mesh( jowiszG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: jowiszT }) );
jowiszM.position.x = 240;
jowiszM.castShadow = true;
jowiszM.receiveShadow = true;
jowisz.add(jowiszM);

var saturn = new THREE.Group();
var saturnG = new THREE.SphereGeometry( 32, 36, 36);
var saturnT = new THREE.TextureLoader().load( 'textures/saturn.jpg' );
var saturnM = new THREE.Mesh( saturnG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: saturnT }) );
saturnM.position.x = 475;
saturnM.castShadow = true;
saturnM.receiveShadow = true;
saturn.add(saturnM);

var uran = new THREE.Group();
var uranG = new THREE.SphereGeometry( 15, 36, 36);
var uranT = new THREE.TextureLoader().load( 'textures/uran.jpg' );
var uranM = new THREE.Mesh( uranG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: uranT }) );
uranM.position.x = 950;
uranM.castShadow = true;
uranM.receiveShadow = true;
uran.add(uranM);

var neptun = new THREE.Group();
var neptunG = new THREE.SphereGeometry( 19, 36, 36);
var neptunT = new THREE.TextureLoader().load( 'textures/neptun.jpg' );
var neptunM = new THREE.Mesh( neptunG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: neptunT }) );
neptunM.position.x = 1500;
neptunM.castShadow = true;
neptunM.receiveShadow = true;
neptun.add(neptunM);

var ksiezyc = new THREE.Group();
var ksiezycG = new THREE.SphereGeometry( 2, 36, 36);
var ksiezycT = new THREE.TextureLoader().load( 'textures/moonmap.jpg' );
var ksiezycM = new THREE.Mesh( ksiezycG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: ksiezycT }) );
ksiezycM.position.x = 12;
ksiezycM.castShadow = true;
ksiezycM.receiveShadow = true;
ksiezyc.add(ksiezycM);
ziemiaM.add(ksiezyc);

var saturn_ring = new THREE.Group();
var saturn_ringG = new THREE.RingGeometry( 34, 40, 36 );
var saturn_ringT = new THREE.TextureLoader().load( 'textures/saturn_ring.png' );
var saturn_ringM = new THREE.Mesh( saturn_ringG, new THREE.MeshStandardMaterial({ color: 0xffffff, map: saturn_ringT, side: THREE.DoubleSide }) );
saturn_ring.position.x = 475;
saturn_ring.rotation.x+=Math.PI/2;
//saturn_ringM.castShadow = true;
//saturn_ringM.receiveShadow = true;
saturn_ring.add(saturn_ringM);
saturn.add(saturn_ring);
			
sun.add(mercury);
sun.add(wenus);
sun.add(ziemia);
sun.add(mars);
sun.add(jowisz);
sun.add(saturn);
sun.add(uran);
sun.add(neptun);
			
scene.add(sun);

camera.position.z = cameraDistance;

  // add ambient light
  const ambientLight = new THREE.AmbientLight( 0x2a2a2a ) ;
  scene.add( ambientLight );

renderer.render( scene, camera );

// aktualizacja OrbitControls.js
function animate() {
requestAnimationFrame( animate );

sunM.rotation.z += 0.1;
sunM.rotation.x += 0.01;
sunM.rotation.y += 0.001;
				
mercury.rotation.y += 0.05;
mercuryM.rotation.y += 0.09;

wenus.rotation.y += 0.01;
wenusM.rotation.y += 0.05;

ziemia.rotation.y += 0.004;
ziemiaM.rotation.y += 0.05;
				
ksiezyc.rotation.y += 0.05;  

mars.rotation.y += 0.003;
marsM.rotation.y += 0.035;

jowisz.rotation.y += 0.0005;
jowiszM.rotation.y += 0.1;

saturn.rotation.y += 0.0002;
saturnM.rotation.y += 0.1;

uran.rotation.y += 0.00007;
uranM.rotation.y += 0.075;

neptun.rotation.y += 0.000035;
neptunM.rotation.y += 0.08;
	
controls.update();

renderer.render( scene, camera );
}

animate();

// lights controls
  document.getElementById( 'ambient-light' ).addEventListener(
    'click',
    function() {
      this.className = this.className.indexOf( 'inactive' ) > -1 ? 'active' : 'inactive';
      ambientLight.intensity = ambientLight.intensity==1 ? 0 : 1;
      renderer.render( scene, camera );
    },
    false
  );

// zmiana rozmiaru okna
window.addEventListener(
  'resize',
  function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
  },
  false
);