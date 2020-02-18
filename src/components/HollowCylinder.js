import React, { useState } from "react";

import { 
  InputNumber,
  Select,
} from "antd";
import products from '../products'
import { getVolByDiameterAndHeight } from '../utils';
const { Option } = Select;

const CylinderComponent = () => {
  const [diameter, setDiameter] = useState(0);
  const [height, setHeight] = useState(0);
  const [innerDiameter, setInnerDiameter] = useState(0);

  const outerVolInMM = getVolByDiameterAndHeight(diameter, height);
  const innerVolInMM = getVolByDiameterAndHeight(innerDiameter, height);
  const volInMM = outerVolInMM - innerVolInMM;
  
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
      <div>
      {`\u2300`}:
        <InputNumber 
          size="small"
          min={0}
          max={100000}
          defaultValue={diameter}
          onChange={setDiameter} />
      </div>
      <div>
        h:
        <InputNumber 
          size="small"
          min={0}
          max={100000}
          defaultValue={height}
          onChange={setHeight} />
      </ div>
      <div>
        {`inner \u2300`}:
        <InputNumber 
          size="small"
          min={0}
          max={100000}
          defaultValue={innerDiameter}
          onChange={setInnerDiameter} />
      </ div>
      <hr />
      <div>
        <b>Vol</b>:  {volInMM.toFixed(3)} mm<sup>3</sup>  /  {(volInMM/1000).toFixed(3)} ml
      </div>
      <hr />
      <div>
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
            <Option value={value}>{value}</Option>  
          ))}
        </Select>,
      </div>
      <div>
        A:   {(Vepoxy * volInMM).toFixed(3)} g
        <br />
        B:   {(Vhard * volInMM).toFixed(3)} g
      </div>
    </ React.Fragment>
    )
};

export default CylinderComponent;