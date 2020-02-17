import React, { Component } from 'react';
import './List'
/*import logo from './logo.svg';
import List from './List';
import List2 from './list2';*/
import "./App.css"
import Laba2 from './Laba2';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        showFile1: false,
        

      }
   
  }
 
  onChangeHandler=event=>{
    this.setState({ 
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }


onClickHanlder = (e) => {
    this.setState ({showFile1: true});
   /* switch(e.target.id){
      case 'laba1': this.setState({ arLab: [true, false, false, false, false, false, false, false,false, false]});
      break;
      case 'laba2': this.setState({ arLab: [false, true, false, false, false, false, false, false,false, false]});
      break;
    }*/
}

  render(){
    const { showFile1 } = this.state;

  return (
    <div className="myApp">
      <div className="LeftWindow">
        <p className="title" >Oleg Arsenov IPZ-17-1 ReactJS labs</p>
        <p className = "laba1" onClick={this.onClickHanlder} id='laba1'>Lab 1</p>
        <p className = "laba1" onClick={this.onClickHanlder} id='laba2'>L 2</p>
        <p className = "laba1" /*onClick={this.onClickHanlder}*/>Lab 1</p>
        <p className = "laba1" /*onClick={this.onClickHanlder}*/>Lab 1</p>
        <p className = "laba1" /*onClick={this.onClickHanlder}*/>Lab 1</p>
        <p className = "laba1" /*onClick={this.onClickHanlder}*/>Lab 1</p>
        <p className = "laba1" /*onClick={this.onClickHanlder}*/>Lab 1</p>
        <p className = "laba1" /*onClick={this.onClickHanlder}*/>Lab 1</p>
        

      </div>
      <div className="RightWindow">
        <div className="Top">
          {showFile1 === true ? <Laba2 /> : ''}
        </div>
        <div className="Bottom">
          <input name="uploadFile" type="file" onChange={this.onChangeHandler} onClick={this.onClickHandler}/>
        </div>
      </div>
    </div>
  );
}
}
export default App;
