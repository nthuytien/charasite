import React, { Component, useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,

} from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.bio}</td>
    <td>{props.record.age}</td>
    <td>{props.record.role}</td>
  </tr>
)

function Journal() {
  const [records, setRecords] = useState([]);

  let characterRows = [];

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
      setRecords(records);
      //setRecords(records);
      //console.log("Got records!")
      //console.log(records)
    }
  
    getRecords();
  
    return;
  }, [records.length]);

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
        <div className="header-image" style={{backgroundImage: `url(` + require(`${backgroundImageURL}`) + `)`}}>
          <div className='font-face'>
            Journal
          </div>
        </div>
        <br /><br />
        Session Summaries
        <hr /><br />



      </div>


    </div>
  );
}

export default Journal;
