import axios from "axios";

export const getTickets = async () => {
  try {
    return await axios.get('http://localhost:4000/tickets');
  } catch (error) {
    console.error(error);
  }
}