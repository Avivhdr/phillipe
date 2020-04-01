import React, { useState } from "react";

import { 
  InputNumber,
  Select,
} from "antd";

import Result from './Result';
import Styles from './styles';
import products from '../products'
const { Option } = Select;

const RectangleComponent = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const volInCMM = height*width*length;
  const volInML = volInCMM/1000;
  const [selectedProduct, setSelectedProduct] = useState(products[0]) 

  function onSelectChange(value) {
    setSelectedProduct(products
      .find((p) => p.value === value))
  }
   
  const selectedProductMixRatio = products
    .find((p) => p.value === selectedProduct.value)
    .mixRatio;

  const VolumeAInML = volInML/(1+(selectedProductMixRatio));
  const VolumeBInML = selectedProductMixRatio * VolumeAInML;

  return (
    <React.Fragment>
       <Styles.StyledDiv>
        <Styles.StyledSpan>Height</Styles.StyledSpan>
        <InputNumber 
          type="number"
          size="medium"
          min={0}
          max={100000}
          defaultValue={height}
          onChange={setHeight} 
        />
      </Styles.StyledDiv>
      <Styles.StyledDiv>
      <Styles.StyledSpan>Width</Styles.StyledSpan>
        <InputNumber 
          type="number"
          size="medium"
          min={0}
          max={100000}
          defaultValue={width}
          onChange={setWidth} />
      </Styles.StyledDiv>
      <Styles.StyledDiv>
      <Styles.StyledSpan>Length</Styles.StyledSpan>
        <InputNumber 
          type="number"
          size="medium"
          min={0}
          max={100000}
          defaultValue={length}
          onChange={setLength} />
      </Styles.StyledDiv>
      <hr />
      <Styles.StyledDiv>
        <Styles.StyledSpan>Product:</Styles.StyledSpan>
        <Select
          showSearch
          defaultValue={selectedProduct.value}
          style={{ width: 200 }}
          placeholder="Select a product"
          optionFilterProp="children"
          onChange={onSelectChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          { products.map(({ value }) => (
            <Option key={value} value={value}>{value}</Option>  
          ))}
        </Select>
      </Styles.StyledDiv>
      <hr />
      <Result
        volInCMM={volInCMM}
        volInML={volInML}
        VolumeAInML={VolumeAInML}
        VolumeBInML={VolumeBInML}
      ></Result>
    </ React.Fragment>
    )
};

export default RectangleComponent;