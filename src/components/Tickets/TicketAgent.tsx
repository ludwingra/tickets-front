import React from 'react'
import { useHistory, useParams } from "react-router-dom";

const TicketAgent = () => {

  const history = useHistory();
  const params = useParams();
  console.log(params);


  return (
    <div>
      TicketAgent
    </div>
  )
}

export default TicketAgent
