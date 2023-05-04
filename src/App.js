import React, { Component }  from 'react';
import './App.css';
import Player from './player';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  
} from 'react-router-dom';

// require database connection 
//const dbConnect = require("./db/dbConnect");

// execute database connection 
//dbConnect();


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/player" element={<Player/>}/>
      </Routes>
      
    </Router>
  )
}


function Home() {
  
  let navigate = useNavigate();

  let backgroundImageURL = "./assets/bg1q2.jpg"

  const routeChange = () => {
    let path = '/player'
    navigate(path)
  }


  return (
    <div className="App">
      <div className="body">
      <br/><br/>
        <div className="header-image" style={{backgroundImage: `url(` + require(`${backgroundImageURL}`) + `)`}}>
          <div className='font-face'>
          CyberPunk Red
          </div>
        </div>
        <br/><br/>
      An Apocalyptic Cyberpunk TTRPG Game
      <hr/><br/>

      <div className="blurb">
      insert blurb here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in eu mi bibendum neque. Ullamcorper sit amet risus nullam eget felis eget nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Vestibulum morbi blandit cursus risus at ultrices mi. Amet aliquam id diam maecenas ultricies mi eget. Aenean et tortor at risus viverra adipiscing at in tellus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tortor condimentum lacinia quis vel. Tempor id eu nisl nunc mi ipsum. Id faucibus nisl tincidunt eget nullam non nisi est. Ac tortor vitae purus faucibus. Adipiscing diam donec adipiscing tristique. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Lobortis elementum nibh tellus molestie. A iaculis at erat pellentesque adipiscing commodo elit at. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices.

Nibh ipsum consequat nisl vel pretium. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Morbi tristique senectus et netus et malesuada fames ac turpis. Nunc sed augue lacus viverra vitae. Id nibh tortor id aliquet lectus. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Sed arcu non odio euismod lacinia. Commodo odio aenean sed adipiscing diam. Turpis egestas pretium aenean pharetra magna. Sit amet mauris commodo quis. Convallis convallis tellus id interdum velit.
    </div>
    <br/>
      <div className='button'>

        <button>Rulebook</button>  <button>NPC Characters</button>  <button onClick={routeChange}>Player Characters</button> <button>Campaign</button> 
      </div>

      <br/><br/>
      <div className="row"><div className="column">
      <img className="imageN" src= {require('./assets/net.png')}/> 
      </div>
      <div className="column">
      Diverse Characters 
      <br/> <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in eu mi bibendum neque. Ullamcorper sit amet risus nullam eget felis eget nunc. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Vestibulum morbi blandit cursus risus at ultrices mi. Amet aliquam id diam maecenas ultricies mi eget. Aenean et tortor at risus viverra adipiscing at in tellus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Tortor condimentum lacinia quis vel. Tempor id eu nisl nunc mi ipsum. Id faucibus nisl tincidunt eget nullam non nisi est. Ac tortor vitae purus faucibus. Adipiscing diam donec adipiscing tristique. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Lobortis elementum nibh tellus molestie. A iaculis at erat pellentesque adipiscing commodo elit at. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices.
      </div>
      <div className="column">
      <img className="imageN" src= {require('./assets/hot.png')}/>
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      
      </div>
        

    </div>
  );
}

export default App;