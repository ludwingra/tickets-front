import React, { useState, useEffect } from 'react'

import * as agentService from "./AgentsService";
import { AgentInterface } from "./AgentInterface";
import AgentItem from "./AgentsItem";

const Agents = () => {

  const [agents, setAgents] = useState<AgentInterface[]>([]);

  const loadAgent = async () => {
    const res: any = await agentService.getAgents();
    setAgents(res.data);
  };

  useEffect(() => {
    loadAgent();
  }, [])

  return (
    <div className="row">
      { agents.map((agent) => {
        return <AgentItem agent={agent} />
      })}
    </div>
  )
}

export default Agents
