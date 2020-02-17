import React from 'react';
import "antd/dist/antd.css";
import { Tabs } from "antd";
import './App.css';
import cylinderIMG from './cylinder.png'; // Tell webpack this JS file uses this image
import CylinderComponent from "./Cylinder";

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
        tab={
          <span>
            {/* <Icon type="android" /> */}
            Cube
          </span>
        }
        key="2"
      >
        'Cube content'
      </TabPane>
    </Tabs>
    ,
  </div>
  );
}

export default App;
