import React, { Component, useEffect, useState } from "react";
// import logo from './logo.svg';
// import './App.css';

const Calculations = () => {
    const [textdata, setTextdata] = useState(""); // textarea
    const [dropdown1, setDropdown1] = useState(""); // dropdown
    const [dropdown2, setDropdown2] = useState(""); // dropdown
    const [data, setData] = useState(""); // data is the output going to be displayed

    const handleDropdown1 = (event) => {
        setDropdown1(event.target.value);
    };

    const handleDropdown2 = (event) => {
        setDropdown2(event.target.value);
    };

    const handleTextchange = (event) =>{
        setTextdata(event.target.value);
    }

    const compute = ()=>{
        /*here we call the below functions, with the value and the -to */
        let value = "";
        switch(dropdown2){
            case "binary":
                value = toDecimal(textdata);
                toBinary(value);
            case "octal":
                value = toDecimal(textdata);
                toOctal(value);
            case "hex":
                value = toDecimal(textdata);
                toHex(value);
            case "decimal":
                toDecimal(value, dropdown1);
        }
    }

    /*-------------------*/

    const toDecimal = (value, convertTo) => {
        useEffect((value, convertTo) => {
            fetch(`/api/getDecimal?value=${value}&to=${convertTo}`)
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);
    };

    const toBinary = (value) => {
        useEffect((value) => {
            fetch(`/api/getBinary?value=${value}`)
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);
    };

    const toOctal = (value) => {
        useEffect((value) => {
            fetch(`/api/getOctal?value=${value}`)
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);
    };

    const toHex = (value) => {
        useEffect((value) => {
            fetch(`/api/getHex?value=${value}`)
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);
    };

    return (
        <div className="container">
            <h5>Select Mode.</h5>
            <div className="row">
                <div className="col-md-5">
                    <select
                        name="dropdown1"
                        onChange={handleDropdown1}
                        value={dropdown1}
                        className="form-control"
                    >
                        <option value="decimal">Decimal</option>
                        <option value="binary">Binary</option>
                        <option value="octal">Octal</option>
                        <option value="hex">Hexadecimal</option>
                    </select>
                </div>

                <div align="center" className="col-md-2">
                    <h5>To</h5>
                </div>
                <div className="col-md-5">
                    <select
                        name="dropdown2"
                        onChange={handleDropdown2}
                        value={dropdown2}
                        className="form-control"
                    >
                        <option value="decimal">Decimal</option>
                        <option value="binary">Binary</option>
                        <option value="octal">Octal</option>
                        <option value="hex">Hexadecimal</option>
                    </select>
                </div>
            </div>

            <br />
            <div className="row">
                <div className="col-md-12">
                    <textarea
                        onChange={handleTextchange}
                        value={textdata}
                        rows="5"
                        className="form-control"
                        placeholder="Enter digits here... e.g. 110001"
                    ></textarea>
                </div>

                <br />
                <div className="col-md-12">
                    <button onClick={compute} className="btn btn-primary">Compute</button>
                </div>

                <br />

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">RESULT: </h1>
                            <p className="card-text">{data}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculations;
