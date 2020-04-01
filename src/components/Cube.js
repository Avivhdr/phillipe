import React, { useState } from "react";
import { 
  InputNumber,
  Select,
} from "antd";
import Result from './Result';
import Styles from './styles';
import products from '../products'
const { Option } = Select;

const CubeComponent = () => {
  const [side, setSide] = useState(0);
  const volInCMM = side**3;
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
        <Styles.StyledSpan>Side:</Styles.StyledSpan>
        <InputNumber
          type="number"
          size="medium"
          min={0}
          max={100000}
          defaultValue={side}
          onChange={setSide} />
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

export default CubeComponent;