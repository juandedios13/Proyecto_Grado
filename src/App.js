
import React, { useEffect, useState } from "react";
import {UserContext} from './contexts/UserContext'
import AppRouter from "./routes/AppRouter";



function App() {

  const [user ,setUser] =  useState(null);


  return (

    <UserContext.Provider value={{user,setUser}}>

      <AppRouter></AppRouter>

    </UserContext.Provider>

   
  );
}

export default App;
