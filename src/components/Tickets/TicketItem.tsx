import React from 'react'
import { Ticket } from './Ticket'

interface Props {
  ticket: Ticket
}

const TicketItem = ({ ticket }: Props) => {
  return (
    <div>
      <h1>{ticket.title}</h1>
      <p>{ticket.description}</p>
    </div>
  )
}

export default TicketItem
