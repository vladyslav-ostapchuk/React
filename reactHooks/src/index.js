




import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'materialize-css'
// import * as serviceWorker from './serviceWorker';
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
// serviceWorker.unregister();
// reportWebVitals();