import React, { Component, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,

} from 'react-router-dom';
//import { Link } from 'react-router-dom';

//Okay this part kinda confused me but as far as I can tell it's basically just defining the
//HTML structure for a "Record", which is how we'll process all of our characters.
const Record = (props) => (

  <div className="row"><div className="column3">
    <img className="imageC" src={require('./assets/marcie.png')} />
  </div>
    <div className="column2">

      <div className="charaHeader">
        {props.record.name}
      </div>
      {props.record.role} | {props.record.age}
      <br /> <br />
      {props.record.bio}
    </div>
  </div>
)

function Chara() {
  // Still getting used to useState honestly but for some reason this is necessary?
  // It's a React thing and we'll figure it out.
  const [records, setRecords] = useState([]);

  let characterRows = [];

  let backgroundImageURL = "./assets/bg3.jpg"

  let navigate = useNavigate();

  const routeChange = () => {
    let path = '/'
    navigate(path)
  }

  // I'm also still not sure about the useEffect() bit but this is getting the records from the DB
  // and setting them using the state
  useEffect(() => {
    async function getRecords() {
      console.log("Fetching...")
      // The server code is running the DB connection on port 5000 and the record.js file defined
      // this /record/ route as a way to just grab all of our characters as a response.
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      else {
        console.log("No error!")
      }

      // Now we take the JSON from that response and set our records to that.
      const records = await response.json();
      setRecords(records);
      //setRecords(records);
      //console.log("Got records!")
      //console.log(records)
    }

    getRecords();

    return;
  }, [records.length]);

  // Here we create a function that will actually create a Record (that HTML at the top of the file)
  // from each of the records we just got.  We don't call this immediately, but we will use it later
  function characterList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
        />
      );
    })
  }


  return (
    <div className="App">
      <div align="left" className='button'>

        <button onClick={routeChange}>Back</button>
      </div>
      <div className="body">
        <br /><br />
        <div className="header-image" style={{ backgroundImage: `url(` + require(`${backgroundImageURL}`) + `)` }}>
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
        {characterList()}
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        {/*--And down here we create a table.
              We call characterList() to use the function we defined earlier
              and create a Record for each character.  It basically just inserts whatever gets returned.*/}
        


      </div>


    </div>
  );
}

export default Chara;
