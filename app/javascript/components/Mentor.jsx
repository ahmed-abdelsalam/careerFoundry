import React, { useEffect, useState, useContext, useReducer } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FaLongArrowAltRight, FaPhoneAlt } from "react-icons/fa";
import { Action, Context, Reducer, UpdateContext } from "../store/state";
import "./Mentor.scss";
const Mentor = () => {
  const history = useHistory();
  const { state } = useContext(Context);
  const { dispatch } = useContext(UpdateContext);

  const [mentors, setMentors] = useState([]);
  useEffect(() => {
    let result;
    axios.get("/api/v1/mentors").then((res) => {
      if (res.data?.length) {
        setMentors(res.data);
      }
    });
  }, []);
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="cf-content">
        <h1 className="display-4 ds-grid__row ds-typography__h2 mentor-title">
          Call a mentor
        </h1>
        <h4 className="lead">
          Now you can choose from our superhero mentors to start calling them
        </h4>
        <hr />
        <div className="profile profiles-grid-item row my-3">
          {mentors.map((r) => (
            <div key={r.id} className="mentor-card my-4 row  px-0">
              <div className="col col-lg-3 col-md-5 pl-0"
              style={{
                background: `url(${r.avatar_url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderRadius: '20px',
              }}>
                </div>
              <div className="col">
                <div className="profile-content">
                <h1>{r.name}</h1>
                <h3>{r.course}</h3>
                <p>
                  {r.name} Will help you finding the details that you can miss
                  easily during the course, he will also support you with more
                  challenges that assure you understading. Check if he has any
                  available time soon
                </p>
                <a
                  className="call-now"
                  onClick={() => {
                    dispatch({ type: Action.SET_MENTOR, data: r });
                    history.push("/app/calendar");
                  }}
                >
                  <FaPhoneAlt />
                  <FaLongArrowAltRight />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
