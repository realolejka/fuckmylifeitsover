import React from 'react';
import "./App.css";

const Laba2 = (props) => {
    const {callBackF, result, compatibility} = props;
   
    return (
        <div className="laba2">
            <p className="init_data"> Введите исходные данные: </p>
            <div className="radius_div">
                <table >
                    <tr>
                        <th>Название</th>
                        <th>Условное обозначение</th>
                        <th>Ввод</th>
                    </tr>
                    <tr>
                        <th>Радиус</th>
                        <th>r</th>
                        <th><input id="radius" onChange={ (e) => callBackF(e, 'radius')}></input></th>
                    </tr>
                    <tr>
                        <th>Центральный угол</th>
                        <th>ϕ</th>
                        <th><input id="angle" onChange={ (e) => callBackF(e, 'angle')}></input></th>

                    </tr>
                    <tr>
                        <th>Площадь</th>
                        <th>S</th>
                            <th><output  name="square"></output>{result} cm<sup>2</sup></th>
                    </tr>
                   
                    <tr>
                         <th>Первая сторона треугольника </th>
                         <th> a</th>
                         <th><input id="side1"  onChange={ (e) => callBackF(e, 'side1')}></input></th>
                    </tr>
                    <tr>
                         <th>Вторая сторона треугольника </th>
                         <th> b</th>
                         <th><input id="side2"  onChange={ (e) => callBackF(e, 'side2')}></input></th>
                    </tr>
                    <tr>
                         <th>Третья сторона треугольника </th>
                         <th> c</th>
                         <th><input id="side3"  onChange={ (e) => callBackF(e, 'side3')}></input></th>
                    </tr>
                    <tr>
                        <th>Совместимость</th>
                        <th>Compatibility</th>
                        <th><output  name="comp"></output>{compatibility}</th>
                    </tr>
                </table>
                
            </div>
        </div>
    );
}

export default Laba2;