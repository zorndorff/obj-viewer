import './style.css';
import 'aframe';

const app = document.querySelector('#app')!;

app.innerHTML = `
  <div id="viewer">
    <a-scene background="color: #ECECEC">
    <a-assets>
      <a-asset-item id="viewedModel" src="bathroom_plan.obj"></a-asset-item>
      <a-asset-item id="viewedModelMtl" src="bathroom_plan.mtl"></a-asset-item>
    </a-assets>
    <a-entity obj-model="obj: #viewedModel;  mtl: #viewedModelMtl;"></a-entity>
    <a-entity id="rig" position="35 0 50">
      <a-entity id="camera" camera look-controls></a-entity>
    </a-entity>
    </a-scene>
  </div>
`;