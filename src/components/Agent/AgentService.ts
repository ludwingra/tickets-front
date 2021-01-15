import axios from "axios";
import { Agent } from "./Agent";

const API = 'http://localhost:4000';

export const getAgent = async () => {
  try {
    return await axios.get(`${API}/agent?connected=false`);
  } catch (error) {
    console.error(error);
  }
}

export const createAgent = async (agent: Agent) => {
  try {
    return await axios.post(`${API}/agent`, agent);
  } catch (error) {
    console.error(error);
  }
}