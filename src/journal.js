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
  <div>
    {props.record.info}
  </div>
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
      const response = await fetch(`http://localhost:5000/journal/`);
  
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

  function journalList() {
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

        {journalList()}



      </div>


    </div>
  );
}

export default Journal;
