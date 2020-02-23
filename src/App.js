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
       counter: 0
     }
     this.counterContent = this.counterContent.bind(this)
     this.toggleContent  = this.toggleContent.bind(this)
     this.setCounter0 = this.setCounter0.bind(this)
  }
 
  toggleContent (event){
    event.preventDefault()
    this.setState({
      showContent: !this.state.showContent
    })

  }  



  counterContent(event){
    event.preventDefault()
    
    this.setState({
      counter: this.state.counter +1 
    })
  }
  
  setCounter0(event){
    event.preventDefault()
    this.setState({
      counter: this.state.counter == 0
    })
  }
  passParametr(data_num){
    
  }
  

  render(){
    const {showContent} = this.state;
    const {counter} = this.state;
    
    
    
  return (
    <div className="myApp">
      <div className="LeftWindow">
        <p className="title " onClick={this.setCounter0} >Oleg Arsenov IPZ-17-1 ReactJS labs</p>
        <nav id = "links">
          <div className="nav-link active-link" data_num="1" >Лабораторная работа 1 </div>
          <div className="nav-link active-link" data_num="2" onClick={this.toggleContent}>Лабораторная работа 2 </div>
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
        
        {counter === 3 ? <Laba2 />:""}
        {counter === 4 ? <Laba4 />:""}

        
       
        </div>
        <div className="Bottom">
          
        </div>
      </div>
    </div>
  );
}
}
export default App;
