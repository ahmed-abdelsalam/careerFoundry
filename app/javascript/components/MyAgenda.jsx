import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line }  from "react-icons/ri";
import './MyAgenda.scss'
const MyAgenda = () => {

  const handleDelete=  r =>{
    if( r.id && r.start_time){
      axios.delete(`/api/v1/students/${r.student.id}/agendas/${r.id}`).then(res=>{
        let newAgendas = agendas.filter(k=> k.id != r.id )
        setAgendas(newAgendas)
      }).catch(rej=>{
        console.log('API Error::Delete Call::', rej)
      })
    }
  }

  const [agendas, setAgendas] = useState([]);
  useEffect(() => {
    let result;
    axios.get(`/api/v1/agendas`).then((res) => {
      if (res.data?.length) {
        setAgendas(res.data);
        // console.log(res.data);
      }
    });
  }, []);



  return (
    <div>
      <h1 className="display-4">My Calls</h1>
      <p>Listed below the call you have scheduled</p>
      {agendas.map((r) => (
        <div key={r.id} className="call-card my-3 py-2 p-4 row">
          <div className="col-md-3">
          <img
              src={
                r.mentor?.avatar_url ||
                "https://cdn2.iconfinder.com/data/icons/random-outline-3/48/random_14-512.png"
              }
              alt=""
              className="avatar"
            />
            <h1 className="title">{r.mentor.name}</h1>
            <h1 className="sub-title">{ r.start_time? (new Date(r.start_time)).toDateString() : ''} @{(new Date(r.start_time)).toLocaleString('en-US', { hour: 'numeric', hour12: true })}:00</h1>
          </div>
          <div className="col-md-9 m-auto">
            {
              r.start_time && ((new Date(r.start_time)) >= (new Date()))?
              (<RiDeleteBin6Line className="close" onClick={()=>{handleDelete(r)}} />) : null
            }
            <p>Duration: <strong>{r.duration}</strong> minutes</p>
            <p>Meeting Reason: {r.reason}</p>
            <p className="mb-0">Meeting Link: <a className="text-info" href={`https://whereby.com/careerfoundry-
              ${(""+r.mentor.name)?.split[0]}`} >https://whereby.com/careerfoundry-
              {(""+r.mentor.name)?.split[0]}</a></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAgenda;
