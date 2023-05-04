import React, { Component, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,

} from 'react-router-dom';
//import { Link } from 'react-router-dom';

function Chara() {

  console.log("TEST")

  let backgroundImageURL = "./assets/bg3.jpg"

  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/'
    navigate(path)
  }

  useEffect(() => {
    async function getRecords() {
      console.log("Fetching...")
      const response = await fetch(`http://localhost:5000/record/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      else{
        console.log("No error!")
      }
  
      const records = await response.json();
      //setRecords(records);
      console.log("Got records!")
      console.log(records)
    }
  
    getRecords();
  
    return;
  }, [0]);


  return (
    <div className="App">
      <div align="left" className='button'>

        <button onClick={routeChange}>Back</button>
      </div>
      <div className="body">
        <br /><br />
        <div className="header-image" style={{backgroundImage: `url(` + require(`${backgroundImageURL}`) + `)`}}>
          <div className='font-face'>
            PLAYERS
          </div>
        </div>
        <br /><br />
        Player Characters for CyberPunk:Red Campaign
        <hr /><br />



        <br /><br />
        <div className="row"><div className="column3">
          <img className="imageC" src={require('./assets/marcie.png')} />
        </div>
          <div className="column2">

            <div className="charaHeader">
              Marcelina Czerwinski
            </div>
            Polish | Techie | 22 | Bisexual
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in eu mi bibendum neque. Ullamcorper sit amet risus nullam eget felis eget nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Vestibulum morbi blandit cursus risus at ultrices mi. Amet aliquam id diam maecenas ultricies mi eget. Aenean et tortor at risus viverra adipiscing at in tellus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tortor condimentum lacinia quis vel. Tempor id eu nisl nunc mi ipsum. Id faucibus nisl tincidunt eget nullam non nisi est. Ac tortor vitae purus faucibus. Adipiscing diam donec adipiscing tristique. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Lobortis elementum nibh tellus molestie. A iaculis at erat pellentesque adipiscing commodo elit at. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices.
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


      </div>


    </div>
  );
}

export default Chara;
