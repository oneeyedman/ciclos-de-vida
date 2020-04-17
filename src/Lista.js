import React, {Component} from "react";

class Lista extends Component {
  algoPasaConMiArray(arr1,arr2) {
    
    const result = arr2.map(item=>{
      
      return arr1[item];
    });
    return result;
  }
  
  render() {
    const {initial, nums} = this.props;
    const misDatos = this.algoPasaConMiArray(initial, nums);
    return (
      <ul>
      {misDatos.map(item=><li>{item}</li>)}
      </ul>
    );
  }
}

export default Lista;