import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import RootHome from "./RootHome";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/profile-danny" element={<RootHome />} />
        </Routes>
      </Router>
    )
  }
}
