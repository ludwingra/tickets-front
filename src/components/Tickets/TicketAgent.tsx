import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";

import * as ticketService from "./TicketSerivice";
import * as agentsService from "../Agents/AgentsService";
import { Ticket } from "./Ticket";
import { toast } from "react-toastify";

interface Params {
  id: string
}

const TicketAgent = () => {

  const history = useHistory();
  const params = useParams<Params>();


  const [dataTicket, setDdataTicket] = useState<Ticket>();

  const loadTicket = async () => {
    // Obtengo el ticket
    const res: any = await ticketService.getTicket(params.id);
    if (res.data.agent) {
      // Obtengo el agente
      const resAgent: any = await agentsService.getAgent(res.data.agent);
      res.data.agentName = resAgent.data.name;
    }
    setDdataTicket(res.data);
  };

  const solvedTicket = async () => {
    await ticketService.solvedTicket(params.id);
    toast.success('Ticket resuelto');
    setTimeout(() => {
      history.push('/');
    }, 500);
  }

  useEffect(() => {
    loadTicket();
  }, [])


  return (
    <div className="jumbutron">
      <div className="card">
        <div className="card-header">
          <h3>{dataTicket?.title}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Descripción</h5>
          <p className="card-text">{dataTicket?.description}</p>
          <h5 className="card-title">Agente a Cargo</h5>
          <h3>{dataTicket?.agentName ? dataTicket?.agentName : 'Sin asignar'}</h3>
          <hr />
          <button className="btn btn-success" onClick={solvedTicket}>Cerrar Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default TicketAgent
