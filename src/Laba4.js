import React from 'react';
import { Component } from 'react'
import './Laba4.css'
import { Fragment } from 'react'
class Laba4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showlevel2: false,
            isSwapped: false,
            
        }
       
    }



    showHideonMouseMove = () => {
        this.setState({
            showlevel2: !this.state.showlevel2
        });
    };

    swapImages = () => {
        
        this.setState({
            isSwapped: !this.state.isSwapped,
           
        });
        
    };

     

    render() {
            
        let c = "";
        if (this.state.isSwapped) {
            c = <div className="image-swap"> <div className="image1">
            <img className="first-image" src="./image/image1.jpg" alt="" />
        </div>
        <div className="image2">
            <img className="second-image" src="./image/image2.png" alt="" />
        </div>
        </div>
        } else {        
            c = <div className="image-swap">
                <div className="image2">
            <img className="second-image" src="./image/image2.png" alt="" />
        </div>
                 <div className="image1">
            <img className="first-image" src="./image/image1.jpg" alt="" />
        </div>
        
        </div>

        }

        return (
            <React.Fragment>


                <div className="menu-container">
                    <div className="Menu">
                        <div className="menu-levels" onMouseOver={this.showHideonMouseMove}>

                            Menu
                     </div>
                        <div className="menu-levels" >
                            {this.state.showlevel2 ? "Level2" : " "}
                        </div>
                    </div>

                </div>
                <div className="image-container">
                    {c}
                    <div className="swap-btn" onClick={this.swapImages}>
                        Swap Images
                    </div>
                </div>
            </React.Fragment>



        );
    }
}

export default Laba4;