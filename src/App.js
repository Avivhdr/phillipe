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
        <TabsStyled defaultActiveKey="1">
          <TabPane
            key="1"
            tab={<img src={cylinderIMG} alt="cylinder" height="33" width="33"/>}
          >
            <CylinderComponent />
          </TabPane>
          <TabPane
            key="2"
            tab={<img src={cubeIMG} alt="cube" height="33" width="33"/>}
          >
            <CubeComponent />
          </TabPane>
          <TabPane
            key="3"
            tab={<img src={rectangleIMG} alt="rectangle" height="33" width="33"/>}
          >
            <RectangleComponent />
          </TabPane>
          <TabPane
            key="4"
            tab={<img src={hollowCylinderIMG} alt="hollowCylinder" height="33" width="33"/>}
          >
            <HollowCylinderComponent />
          </TabPane>
        </TabsStyled>
  </div>
  );
}

export default App;
