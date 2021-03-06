import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Tickets from './components/Tickets/Tickets';
import TicketForm from './components/Tickets/TicketForm';
import Navbar from './components/Navbar/Navbar';
import Agents from './components/Agents/Agents';
import TicketAgent from './components/Tickets/TicketAgent';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={Tickets} />
          <Route path="/new-ticket" component={TicketForm} />
          <Route path="/agent" component={Agents} />
          <Route path="/ticket-agent/:id" component={TicketAgent} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
