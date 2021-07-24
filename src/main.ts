import './style.css';
import broom from './bathroom_plan.obj?url';
import broomMtl from './bathroom_plan.mtl?url';
import 'aframe';

const app = document.querySelector('#app')!;

app.innerHTML = `
  <div id="viewer">
    <a-scene background="color: #ECECEC">
    <a-assets>
      <a-asset-item id="viewedModel" src="${broom}"></a-asset-item>
      <a-asset-item id="viewedModelMtl" src="${broomMtl}"></a-asset-item>
    </a-assets>
    <a-entity obj-model="obj: #viewedModel;  mtl: #viewedModelMtl"></a-entity>
    </a-scene>
  </div>
`;