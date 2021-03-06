import React, { Component } from 'react';
import './List'
/*import logo from './logo.svg';
import List from './List';
import List2 from './list2';*/
import "./App.css"
import Laba2 from './Laba2';
import Laba4 from './Laba4';
import Laba3 from './Laba3';




class App extends Component {

   constructor(props) {
     
    super(props);
     this.state ={
       showContent: false,
       counter: 0,
       data: null,
       radius: 0,
       angle: 0,
       result: 0,
       side1:0,
       side2:0,
       side3:0,
      compatibility: <p>Несовместим</p>,
     }
    
     
     
     this.passData = this.passData.bind(this)
  }
 
  squareOf = () => {
    const {angle, radius}  = this.state;
    this.setState({result: (Math.pow(parseFloat(radius),2)*parseFloat(angle)/+2)});

  }

  isCompatible =() =>{
    const {side1,side2,side3} = this.state;
    this.setState({compatibility: 0});


    if (parseInt(side1) + parseInt(side2) > parseInt(side3))
    this.setState({compatibility:<p>Совместим</p>})
    else
    this.compatibility = <p>Несовместим</p>;


  }

  onChangeStateFromComponent = (e, t) => {
    let vv = e.nativeEvent.data;
    const {angle, radius, side1,side2,side3} = this.state;

    if (t==='radius'){
      this.setState({radius: radius + vv}, () => {this.squareOf()});
    }
    if (t==='angle'){
      this.setState({angle: angle + vv}, () => {this.squareOf()});
    }
    if(t==='side1'){
      this.setState({side1: side1 + vv}, () => {this.isCompatible()});

    }
     if(t==='side2'){
      this.setState({side2: side2 + vv}, () => {this.isCompatible()});

    }
    if(t==='side3'){
      this.setState({side3: side3 + vv}, () => {this.isCompatible()});

    }

  }
  
  passData(event){
    event.preventDefault()
    const {showContent} = this.state;
    this.setState({
      data: event.target.attributes.data_num.value,
      showContent: !showContent
    })

  }
  renderSwitch(event) {
    const{data, result, compatibility} = this.state
    const{showContent} = !this.state.showContent
    if (showContent === false){
      return " ";
    }
    
    
    switch(data){
      case '0':
        return ""
      case '2':
        return <Laba2 callBackF = {this.onChangeStateFromComponent} result = {result} compatibility = {compatibility}/> ;  
        case '3':
          return <Laba3 />;
      case '4':
        return <Laba4 />;
      
       default:
          return "";
    }
    
  }

  render(){
    
    
    const {data, showContent} = this.state;
    
    
  return (
    <div className="myApp">
      <div className="LeftWindow">
        <p className="title  " data_num="0" onClick={this.passData} >Oleg Arsenov IPZ-17-1 ReactJS labs</p>
        <nav id = "links">
          <div className="nav-link active-link" data_num="1" >Лабораторная работа 1 </div>
          <div className="nav-link active-link" data_num="2" onClick={this.passData}  >Лабораторная работа 2 </div>
          <div className="nav-link active-link" data_num="3" onClick={this.passData} >Лабораторная работа 3</div>
          <div className="nav-link active-link" data_num="4" onClick={this.passData} >Лабораторная работа 4</div>
          <div className="nav-link active-link" data_num="5">Лабораторная работа 5</div>
          <div className="nav-link active-link" data_num="6">Лабораторная работа 6</div>
          <div className="nav-link active-link" data_num="7">Лабораторная работа 7</div>
          <div className="nav-link active-link" data_num="8">Лабораторная работа 8</div>
          <div className="nav-link active-link" data_num="9">Лабораторная работа 9</div>
        </nav>

      </div>
      
      <div className="RightWindow">
        <div className="Top">
        
        {this.renderSwitch() }
        {showContent? true :""}  
        
       
        </div>
        <div className="Bottom">
          
        </div>
      </div>
    </div>
  );
}
}
export default App;
