import axios from "axios";
import { Ticket } from "./Ticket";

const API = 'http://localhost:4000';

// Obtener lista tickets
export const getTickets = async () => {
  try {
    return await axios.get(`${API}/tickets`);
  } catch (error) {
    console.error(error);
  }
}
// Agregar ticket
export const createTickets = async (ticket: Ticket) => {
  try {
    return await axios.post(`${API}/tickets`, ticket);
  } catch (error) {
    console.error(error);
  }
}
// Obtener ticket por id
export const getTicket = async (id: string) => {
  try {
    return await axios.get<Ticket>(`${API}/tickets/${id}`);
  } catch (error) {
    console.error(error);
  }
}
// Obtener ticket por id
export const solvedTicket = async (id: string) => {
  try {
    return await axios.get(`${API}/tickets/solved/${id}`);
  } catch (error) {
    console.error(error);
  }
}
// solved/:id
