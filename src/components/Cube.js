import React, { useState } from "react";
import { 
  InputNumber,
  Select,
} from "antd";
import Styles from './styles';
import products from '../products'
const { Option } = Select;

const CubeComponent = () => {
  const [side, setSide] = useState(0);
  const volInMM = side**3;
  const [selectedProduct, setSelectedProduct] = useState(products[0]) 

  function onSelectChange(value) {
    setSelectedProduct(products
      .find((p) => p.value === value))
  }

  const selectedProductMixRatio = products
    .find((p) => p.value === selectedProduct.value)
    .mixRatio;

  const Vepoxy = volInMM/(1+(selectedProductMixRatio/100));
  const Vhard = selectedProductMixRatio * Vepoxy;

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
        <Styles.StyledSpan><b>Vol</b>:</Styles.StyledSpan>
        <Styles.StyledSpan>{volInMM.toFixed(3)} mm<sup>3</sup>  /  {(volInMM/1000).toFixed(3)} ml</Styles.StyledSpan>
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
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Styles.StyledSpan><b>A:</b> {(Vepoxy * volInMM).toFixed(3)} g</Styles.StyledSpan>
        </div>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Styles.StyledSpan><b>B:</b> {(Vhard * volInMM).toFixed(3)} g</Styles.StyledSpan>
        </div>
    </ React.Fragment>
    )
};

export default CubeComponent;