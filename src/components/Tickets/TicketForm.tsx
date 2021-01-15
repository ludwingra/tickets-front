import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useHistory } from "react-router-dom";
import { Ticket } from './Ticket'
import * as ticketService from "./TicketSerivice";
import { toast } from "react-toastify";
import { setTimeout } from 'timers';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TicketForm = () => {

  const history = useHistory();

  const initialState = {
    title: '', description: '', name: '', email: ''
  };

  const [ticket, setTicket] = useState<Ticket>(initialState)

  const handleInputChange = (e: InputChange) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await ticketService.createTickets(ticket);
    toast.success('Nuevo ticket agregado');
    setTimeout(() => {
      setTicket(initialState);
      history.push('/');
    }, 500);
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>Nuevo ticket</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="title" placeholder="Asunto del ticket"
                  className="form-control" autoFocus onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <textarea name="description" rows={3} className="form-control"
                  placeholder="Escribe una descripción del problema" onChange={handleInputChange}></textarea>
              </div>

              <div className="form-group">
                <input type="text" name="name" placeholder="Escribe tu nombre"
                  className="form-control" onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <input type="text" name="email" placeholder="Escribe tu email"
                  className="form-control" onChange={handleInputChange} />
              </div>

              <button className="btn btn-primary">
                Crear Ticket
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketForm
