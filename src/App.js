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
        <nav id = "links">
          <div className="nav-link active-link"data-num="0">Лабораторная работа 1</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 2</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 3</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 4</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 5</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 6</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 7</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 8</div>
          <div className="nav-link active-link"data-num="0">Лабораторная работа 9</div>



        </nav>
        

      </div>
      <div className="RightWindow">
        <div className="Top">
          {showFile1 === true ? <Laba2 /> : ''}
        </div>
        <div className="Bottom">
          <input name="uploadFile" type="file" />
        </div>
      </div>
    </div>
  );
}
}
export default App;
