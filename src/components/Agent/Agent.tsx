import React, { useEffect, useState } from 'react';
import { Agent } from "./Agent";
import * as agentService from './AgentService';

const Agent = () => {

  const [agents, setAgents] = useState<Agent[]>([]);

  const loadAgent = async () => {
    const res: any = await agentService.getAgent();
    setAgents(res.data);
  };

  useEffect(() => {
    loadAgent();
  }, [])

  return (
    <div className="row">
      { agents.map((agent) => {
        // return <TicketItem ticket={ticket} />
      })}
    </div>
  )
}

export default Agent;
