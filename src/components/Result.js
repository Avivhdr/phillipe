import React from "react";
import Styles from './styles';

const Result = ({
  volInCMM,
  volInML,
  VolumeAInML,
  VolumeBInML,
}) => {

  return (
    <React.Fragment>
      <Styles.StyledDiv>
        <Styles.StyledSpan><b>Vol</b>:</Styles.StyledSpan>
        <Styles.StyledSpan>{volInCMM.toFixed(3)} mm<sup>3</sup>  /  {volInML.toFixed(3)} ml</Styles.StyledSpan>
      </Styles.StyledDiv>
      <Styles.StyledDiv>
        </Styles.StyledDiv>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Styles.StyledSpan><b>A:</b> {(VolumeAInML).toFixed(3)} ml / {(VolumeAInML * 1.12).toFixed(3)} g</Styles.StyledSpan>
        </div>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Styles.StyledSpan><b>B:</b> {(VolumeBInML).toFixed(3)} ml / {(VolumeBInML * 1.12).toFixed(3)} g</Styles.StyledSpan>
        </div>
    </ React.Fragment>
    )
};

export default Result;