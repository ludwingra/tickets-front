import axios from "axios";
import { AgentInterface } from "./AgentInterface";

const API = 'http://localhost:4000';

// Obtener Agentes
export const getAgents = async () => {
  try {
    return await axios.get(`${API}/agent`);
  } catch (error) {
    console.error(error);
  }
}

// Crear Agente
export const createTickets = async (agent: AgentInterface) => {
  try {
    return await axios.post(`${API}/agent`, agent);
  } catch (error) {
    console.error(error);
  }
}

// Conectar agente
export const connectAgents = async (id: string) => {
  try {
    return await axios.post(`${API}/agent/connect`, { agent: id });
  } catch (error) {
    console.error(error);
  }
}

// Desconectar agente
export const disconnectAgents = async (id: string) => {
  try {
    return await axios.get(`${API}/agent/disconnect/${id}`);
  } catch (error) {
    console.error(error);
  }
}