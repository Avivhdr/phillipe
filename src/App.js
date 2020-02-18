import React from 'react';
import "antd/dist/antd.css";
import { Tabs } from "antd";
import './App.css';

import cylinderIMG from './assets/cylinder.png';
import cubeIMG from './assets/cube.png';
import rectangleIMG from './assets/rectangle.png';
import hollowCylinderIMG from './assets/hollowCylinder.jpeg';

import CylinderComponent from "./components/Cylinder";
import HollowCylinderComponent from "./components/HollowCylinder";
import CubeComponent from "./components/Cube";
import TriangleComponent from "./components/Triangle";

const { TabPane } = Tabs;

function App() {
  return (
      <div className="App">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <img src={cylinderIMG} alt="cylinder" height="33" width="33"/>
            }
            key="1"
          >
            <CylinderComponent />
          </TabPane>
          <TabPane
            tab={<img src={cubeIMG} alt="cube" height="33" width="33"/>}
            key="2"
          >
            <CubeComponent />
          </TabPane>
          <TabPane
            tab={<img src={rectangleIMG} alt="rectangle" height="33" width="33"/>}
            key="3"
          >
            <TriangleComponent />
          </TabPane>
          <TabPane
            tab={<img src={hollowCylinderIMG} alt="hollowCylinder" height="33" width="33"/>}
            key="4"
          >
            <HollowCylinderComponent />
          </TabPane>
        </Tabs>
  </div>
  );
}

export default App;
