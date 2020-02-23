import React, { Component } from 'react';
import './List'
/*import logo from './logo.svg';
import List from './List';
import List2 from './list2';*/
import "./App.css"
import Laba2 from './Laba2';
import Laba4 from './Laba4';


class App extends Component {

   constructor(props) {
     
    super(props);
     this.state ={
       showContent: false,
       counter: 0,
       data: null

     }
    
     this.toggleContent  = this.toggleContent.bind(this)
     
     this.passData = this.passData.bind(this)
  }
 
  toggleContent (event){
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent
    })

  } 

  
  passData(event){
    event.preventDefault()
    const {showContent} = this.state;
    this.setState({
      data: event.target.attributes.data_num.value,
      showContent: !showContent
    })

  }
  

  render(){
    
    const {counter} = this.state;
    const {data, showContent} = this.state;
    
    
  return (
    <div className="myApp">
      <div className="LeftWindow">
        <p className="title " onClick={this.setCounter0} >Oleg Arsenov IPZ-17-1 ReactJS labs</p>
        <nav id = "links">
          <div className="nav-link active-link" data_num="1" >Лабораторная работа 1 </div>
          <div className="nav-link active-link" data_num="2" onClick={this.passData}>Лабораторная работа 2 </div>
          <div className="nav-link active-link" data_num="3" onClick={this.counterContent}>Лабораторная работа 3</div>
          <div className="nav-link active-link" data_num="4" onClick={this.counterContent}>Лабораторная работа 4</div>
          <div className="nav-link active-link" data_num="5">Лабораторная работа 5</div>
          <div className="nav-link active-link" data_num="6">Лабораторная работа 6</div>
          <div className="nav-link active-link" data_num="7">Лабораторная работа 7</div>
          <div className="nav-link active-link" data_num="8">Лабораторная работа 8</div>
          <div className="nav-link active-link" data_num="9">Лабораторная работа 9</div>
        </nav>

      </div>
      <div className="RightWindow">
        <div className="Top">
        
        {showContent ? 
        data === '2' ? <Laba2 />:""
       
        :""}
        
          
        
       
        </div>
        <div className="Bottom">
          
        </div>
      </div>
    </div>
  );
}
}
export default App;
