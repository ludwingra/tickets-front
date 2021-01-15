import React, { useEffect, useState } from 'react';
import { Ticket } from "./Ticket";
import * as ticketService from './TicketSerivice';
import TicketItem from "./TicketItem";

const Tickets = () => {

  const [tickets, setTickets] = useState<Ticket[]>([]);

  const loadTickets = async () => {
    const res: any = await ticketService.getTickets();
    setTickets(res.data);
  };

  useEffect(() => {
    loadTickets();
  }, [])

  return (
    <div>
      { tickets.map((ticket) => {
        return <TicketItem ticket={ticket} />
      })}
    </div>
  )
}

export default Tickets
