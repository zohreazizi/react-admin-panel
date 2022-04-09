import MasterLayout from "./layouts/admin/MasterLayout";
import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./components/frontend/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route name={"Admin"} render={(props) => <MasterLayout {...props} />} path={"/admin"}/>
              <Route path={"/"} element={<Home />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
