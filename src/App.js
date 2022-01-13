import Login from "./component/Login/Login";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import  {Prueba}  from "./component/PanelControl/prueba";

function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path="/prueba" element={<Prueba />}></Route>
        <Route path="/" element={<Login />}>
          
        </Route>
        
      </Routes>
    </BrowserRouter>

   
  );
}

export default App;
