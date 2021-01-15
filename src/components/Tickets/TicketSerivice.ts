import axios from "axios";
import { Ticket } from "./Ticket";

const API = 'http://localhost:4000';

export const getTickets = async () => {
  try {
    return await axios.get(`${API}/tickets`);
  } catch (error) {
    console.error(error);
  }
}

export const createTickets = async (ticket: Ticket) => {
  try {
    return await axios.post(`${API}/tickets`, ticket);
  } catch (error) {
    console.error(error);
  }
}