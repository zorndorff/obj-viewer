import './style.css';
import broom from './bathroom_plan.obj?url';
import 'aframe';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div id="viewer">
    <a-scene background="color: #ECECEC">
    <a-assets>
      <a-asset-item id="viewedModel" src="${broom}"></a-asset-item>
    </a-assets>
    <a-entity obj-model="obj: #viewedModel;"></a-entity>
    </a-scene>
  </div>
`