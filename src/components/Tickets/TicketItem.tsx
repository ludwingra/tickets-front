import React from 'react'
import { Ticket } from './Ticket'
import { useHistory } from "react-router-dom";

import './TicketItem.css';

interface Props {
  ticket: Ticket
}

const TicketItem = ({ ticket }: Props) => {

  const history = useHistory();

  return (
    <div className="col-md-4 p-2">
      <div className="card card-body ticket-card" style={{ cursor: 'pointer' }}
        onClick={() => history.push(`ticket-agent/${ticket._id}`)}>
        <h3 className="card-header">{ticket.title}</h3>
        {/* <h1>{ticket.title}</h1> */}
        <p>{ticket.description}</p>
        <div className="row">
          <div className="col-md-4"><h5>Estado:</h5></div>
          <div className="col-md-8">
            {/* <span className="badge bg-light text-dark">{ticket.status ? 'Resuelto' : 'En proceso'}</span> */}
            <span className={ticket.status ? 'badge bg-success' : 'badge bg-secondary'}>{ticket.status ? 'Resuelto' : 'En proceso'}</span>
          </div>
        </div>
        <hr />
        <h5>Usuario reporte:</h5>
        <h6>{ticket.name}</h6>
        <h6>{ticket.email}</h6>
      </div>
    </div>
  )
}

export default TicketItem
