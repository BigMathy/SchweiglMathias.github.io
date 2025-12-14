// Importing necessary libraries and components
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

// Importing CSS
import "./index.css";

// Rendering the main application within a BrowserRouter for routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
