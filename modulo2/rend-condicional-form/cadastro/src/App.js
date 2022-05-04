
import React from "react";
import './App.css';
import Agradecimento from "./components/Agradecimento";
import F1 from "./components/F1";
import F2 from "./components//F2";
import F3 from "./components//F3";

class App extends React.Component{
state={

step:1
}
Change =()=>{
  this.setState({step: 1});
}

renderStep =()=>{
  switch (this.state.step) {
case 1:
  return <F1/>

  case 2: 
    return <F2/>

    case 3:
       return <F3/>

   case 4:
        return <Agradecimento/>
    default:
      return "Tente novamente"

  }
}


  render(){
    return (

      <div className="App">
        <F1/>
        <F2/> 
        <F3/> 
        <Agradecimento/> 
        
    </div>
 


    )

  }
 proximobutton=()=>{this.setState({step: this.state.step +1})}

  render(){
   return(
     <div className="App">
       {this.renderStep()}
        <button onClick={(this.proximobutton)}>Proxima etapa</button>
      </div>
   )
  }
}


export default App;
