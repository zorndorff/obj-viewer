import"./vendor.311747ed.js";document.querySelector("#app").innerHTML='\n  <div id="viewer">\n    <a-scene background="color: #ECECEC">\n    <a-assets>\n      <a-asset-item id="viewedModel" src="bathroom_plan.obj"></a-asset-item>\n      <a-asset-item id="viewedModelMtl" src="bathroom_plan.mtl"></a-asset-item>\n    </a-assets>\n    <a-entity obj-model="obj: #viewedModel;  mtl: #viewedModelMtl;"></a-entity>\n    <a-entity id="rig" position="35 150 50">\n      <a-entity id="camera" camera look-controls></a-entity>\n    </a-entity>\n    </a-scene>\n  </div>\n';