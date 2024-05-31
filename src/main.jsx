import React from "react";
import ReactDom from "react-dom/client"

import './style.css'

import App from "./component/App"

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
)