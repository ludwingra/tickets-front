import React, { useState, useEffect } from 'react'
import { AgentInterface } from "./AgentInterface";
import { useHistory } from "react-router-dom";
import * as agentService from "./AgentsService";
import { toast } from "react-toastify";
import { setTimeout } from 'timers';

interface Props {
  agent: AgentInterface
}

const AgentsItem = ({ agent }: Props) => {

  const history = useHistory();

  const handleConnect = async () => {
    let id: any = agent._id;

    await agentService.connectAgents(id);

    toast.success('Agente conectado');
    setTimeout(() => {
      history.push('/');
    }, 500);
  }

  const handleDisconnect = async () => {
    let id: any = agent._id;
    await agentService.disconnectAgents(id);

    toast.success('Agente desconectado');
    setTimeout(() => {
      history.push('/');
    }, 500);
  }

  return (
    <div className="col-md-4 p-2">
      <div className="card card-body">
        <div className="row">
          <div className="col-md-6"><h4>Agente:</h4></div>
          <div className="col-md-6"><h5>{agent.name}</h5></div>
        </div>
        <div className="row">
          <div className="col-md-6"><h4>Estado:</h4></div>
          <div className="col-md-6">
            <span className={agent.connected ? 'badge bg-success' : 'bg-danger'}>
              {agent.connected ? 'Conectado' : 'Desconectado'}
            </span>
          </div>
        </div>
        <hr />
        <button onClick={agent.connected ? handleDisconnect : handleConnect} className={agent.connected ? 'btn btn-danger' : 'btn btn-success'}>
          {agent.connected ? 'Desconectar' : 'Conectar'}
        </button>
      </div>
    </div>
  )
}

export default AgentsItem
