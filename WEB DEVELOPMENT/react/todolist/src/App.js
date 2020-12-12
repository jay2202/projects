import React from 'react'
import './App.css';
import Todolist from "./component/Todolist"



function App() {
  
  const [newitem, setnewitem] = React.useState("");
  const [arr, addnewitem] = React.useState([]);

  function newite(e) {
    setnewitem(e.target.value);
  }

  function addnew() {
    if (newitem === "")
    {
      document.getElementById("message").innerHTML = "Fill this first";
      setTimeout(function () { document.getElementById("message").innerHTML = "";}, 1000);
      return;
    }
    addnewitem(previtem => ([...previtem, newitem]));
    setnewitem("");
  }


  return (
  
    <div id="app">
      <p id="heading">Mritunjay's todolist</p>
      
      <div id="inputarea">
        <input onKeyPress={(event) => {
          if (event.key === "Enter")
            return addnew();
        }} onChange={(e) => {newite(e)}} type="text" id="newiteminput" value={newitem} placeholder="add here"/>
        <button id="newadd" href="#" onClick={addnew} ><i className="fa fa-plus-circle" aria-hidden="true" /></button> 
      </div>
      <label id="message">.</label>
      <div id="todolist">
        {arr.map((item) => (<Todolist text={item}/>))}
        </div>
    </div>
  );
}

export default App;
