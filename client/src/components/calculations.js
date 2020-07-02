import React, { Component, useEffect, useState } from "react";
// import logo from './logo.svg';
// import './App.css';

const Calculations = () => {
    const [data, setData] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const toDecimal= ()=>{
        useEffect(() => {
            fetch("/api/getDecimal?value=49&to=convertto")
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);  
    }

    const toBinary= ()=>{
        useEffect(() => {
            fetch("/api/getBinary?value=49")
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);  
    }

    const toOctal= ()=>{
        useEffect(() => {
            fetch("/api/getOctal?value=49")
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);  
    }

    const toHex= ()=>{
        useEffect(() => {
            fetch("/api/getHex?value=49")
                .then((res) => res.json())
                // .then(customers => setData(customers, () => console.log('Customers fetched...', customers)));
                .then((data) => setData(data));
        }, []);  
    }
    

    return (
        <div className="container">
            <h5>Select Mode.</h5>
            <div className="row">
                <div className="col-md-5">
                    <select className="form-control">
                        <option>Decimal</option>
                        <option>Binary</option>
                        <option>Octal</option>
                        <option>Hexadecimal</option>
                    </select>
                </div>

                <div align="center" className="col-md-2">
                    <h5>To</h5>
                </div>
                <div className="col-md-5">
                    <select className="form-control">
                        <option>Decimal</option>
                        <option>Binary</option>
                        <option>Octal</option>
                        <option>Hexadecimal</option>
                    </select>
                </div>
            </div>


            <br />
            <div className="row">
                <div className="col-md-12">
                    <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Enter digits here... e.g. 110001"
                    ></textarea>
                </div>

                <br />
                <div className="col-md-12">
                    <button className="btn btn-primary">Compute</button>
                </div>

                <br />

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">RESULT:</h1>
                            <p className="card-text">54</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculations;
