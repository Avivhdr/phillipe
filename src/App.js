import React from 'react';
import "antd/dist/antd.css";
import styled from 'styled-components';
import { Tabs } from "antd";
import './App.css';

import cylinderIMG from './assets/cylinder.png';
import cubeIMG from './assets/cube.png';
import rectangleIMG from './assets/rectangle.png';
import hollowCylinderIMG from './assets/hollowCylinder.jpeg';

import CylinderComponent from "./components/Cylinder";
import HollowCylinderComponent from "./components/HollowCylinder";
import CubeComponent from "./components/Cube";
import RectangleComponent from "./components/Rectangle";

const { TabPane } = Tabs;

const TabsStyled = styled(Tabs)`
  &&& .ant-tabs-nav .ant-tabs-tab {
    margin: 0;
  }`;

function App() {
  return (
      <div className="App">
        <TabsStyled defaultActiveKey="cylinder">
          <TabPane
            key="cylinder"
            tab={<img src={cylinderIMG} alt="cylinder" height="33" width="33"/>}
          >
            <CylinderComponent />
          </TabPane>
          <TabPane
            key="hollowCylinder"
            tab={<img src={hollowCylinderIMG} alt="hollowCylinder" height="33" width="33"/>}
          >
            <HollowCylinderComponent />
          </TabPane>
          <TabPane
            key="cube"
            tab={<img src={cubeIMG} alt="cube" height="33" width="33"/>}
          >
            <CubeComponent />
          </TabPane>
          <TabPane
            key="rectangle"
            tab={<img src={rectangleIMG} alt="rectangle" height="33" width="33"/>}
          >
            <RectangleComponent />
          </TabPane>
        </TabsStyled>
  </div>
  );
}

export default App;
