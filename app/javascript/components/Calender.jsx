import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Calender from "react-calendar";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import jstz from "jstz";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaGlobeAfrica,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "react-calendar/dist/Calendar.css";
import "./Calender.scss";
import { Link } from "react-router-dom";
import { Action, Context, Reducer } from "../store/state";

const CallCalender = () => {
  const timezone = jstz.determine();
  const region = timezone.name();
  const { state } = useContext(Context);
  const [hours, setHours] = useState(Array(24).fill(false));
  const [agendas, setAgendas] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const ref = useRef();
  const confirm = useRef();
  const openTooltip = () => ref.current.open();
  const closeTooltip = () => ref.current.close();
  const closeConfirm = () => confirm.current.close();
  const [selectedHour, setSelectedHour] = useState(null);

  const toTimestamp = selectedDate =>{
    if (!selectedDate) return;
    let timestamp = new Date(
      selectedDate?.getFullYear(),
      selectedDate?.getMonth(),
      selectedDate?.getDate()
    ).getTime();
    return timestamp
  }


  useEffect(() => {
    if (!state.currentMentor?.id) return;
    axios
      .get(`/api/v1/mentors/${state.currentMentor?.id}/agendas`)
      .then((res) => {
        let agendas = res.data;
        debugger
        let agendasCleared = {};
        if (agendas?.length) {
          agendas.forEach((agenda) => {
            if(agenda.start_time){
              let dt = new Date(agenda.start_time);
              let timestamp = toTimestamp(dt);
              if (!agendasCleared[timestamp]) agendasCleared[timestamp] = {};
              agendasCleared[timestamp][dt.getHours()] = true;
            }
          });
          setAgendas(agendasCleared);
        }
      });
  }, []);


  useEffect(() => {
    // run api to get reserved time during this day
    let newHours = Array(24).fill(false);
    let timestamp = toTimestamp(selectedDate);
    let currentDay = agendas[timestamp];
      for (let h in currentDay) {
        newHours[h] = agendas[timestamp][h];
      }
    setHours(newHours);
  }, [selectedDate]);


  const createNewCall = (e) => {
    debugger;
    e.preventDefault();
    let start_time = selectedDate;
    start_time.setHours(selectedHour);
    let reason = document.getElementById("meeting-reason").value;
    if (!reason || !start_time) return false;
    axios
      .post(`/api/v1/mentors/${state.currentMentor?.id}/agendas`, {
        start_time: start_time.toUTCString(),
        reason: reason,
        duration: 60,
      })
      .then((res) => {
        let newHours = [...hours];
        let newAgendas = {...agendas}
        newHours[selectedHour] = true;
        setHours(newHours);
        newAgendas[toTimestamp(selectedDate)] = newHours;
        setAgendas(newAgendas)
        ref.current.close();
        confirm.current.open();
      }).catch(e=>{
        console.error(e);
        alert("Something wen't wrong please try again!");
      });
  };

  const renderHours = () => {
    if (selectedDate)
      return hours.map((r, ix) => (
        <div className="p-2" key={ix}>
          <span
            className="d-inline-block"
            tabIndex="0"
            data-toggle="tooltip"
            data-placement="top"
            title={r ? 'This Hour is already reserved please select another time':''}
          >
            <button
              disabled={r}
              className="time-slot"
              onClick={() => {
                setSelectedHour(ix);
                if (!setSelectedDate)
                  document.querySelector("#alert").alert("close");
                openTooltip();
              }}
              data-toggle="modal"
              data-target=".confirm-new-call"
            >
              {("0" + ix).slice(-2)}:00
            </button>
          </span>
        </div>
      ));
    return (
      <h1
        className="display-4 text-secondary"
        style={{
          fontFamily: "DINPro-Cond-Light",
          fontSize: "50px",
          margin: "auto",
        }}
      >
        {" "}
        Please select a date
      </h1>
    );
  };

  return (
    <div className=" calendar-card">
      <div className="row">
        <Link
          to="/app"
          aria-label="Go to previous page"
          className="arrow-back"
          href="/imagine-abdelrahmanse?month=2021-05&amp;date=2021-05-02"
        >
          <FaArrowLeft />
        </Link>
        <h1 className="card-title mb-5 mt-3 mx-auto">Select a Date & Time</h1>
      </div>
      <div className="row">
        <div id="mentor" className="col-lg-4 col-md-12 px-5">
          <div className="mentor-container px-3" bis_skin_checked="1">
            <img
              src={
                state.currentMentor?.avatar_url ||
                "https://cdn2.iconfinder.com/data/icons/random-outline-3/48/random_14-512.png"
              }
              alt=""
              className="avatar"
            />
            <h4 className="mentor-name">{state.currentMentor?.name}</h4>
            <h1 className="mentor-course">
              {state.currentMentor?.course || "Available to mutliple courses"}
            </h1>
          </div>
          <div
            data-container="details"
            className="_1Bb7pCnP06 _3-FM_THD4F _2Nb4AfSHpt"
            bis_skin_checked="1"
          >
            <div className="mentor-details" bis_skin_checked="1">
              <FaClock className="icon" />
              60 min
            </div>
            <div className="mentor-details" bis_skin_checked="1">
              <FaMapMarkerAlt className="icon" />
              https://whereby.com/careerfoundry-
              {state.currentMentor?.name?.split[0]}
            </div>
          </div>
          <div className="rich-text-view" bis_skin_checked="1">
            <p>
              Thanks for booking! To join our call please make sure you have a
              good internet connection. If you can't join the call, please
              reschedule.
            </p>
          </div>
          <div
            className="mentor-details"
            style={{
              marginTop: "80px",
            }}
          >
            <FaGlobeAfrica /> {region}
          </div>
        </div>
        <div className="col-lg-4 col-md-12" style={{ margin: "auto" }}>
          <Calender
            className="col hours my-5"
            onChange={setSelectedDate}
            selectedDate={selectedDate}
            minDate={new Date()}
            minDetail="decade"
          />
        </div>
        <div className="col-lg-4 col-md-12 hours-container">
          <Popup ref={confirm}>
            <div className="m-5">
              <AiOutlineClose className="close" onClick={closeConfirm} />
              <h1
                className="display-4 text-success"
                style={{ fontSize: "30px", textAlign: "center" }}
              >
                Your Meeting set successfully!!
              </h1>
            </div>
          </Popup>
          <Popup ref={ref}>
            <div className="m-5">
              <AiOutlineClose className="close" onClick={closeTooltip} />
              <h1 className="display-4 text-secondary">
                Schedule a meeting ?
              </h1>
              <h4 className="mt-4 text-secondary">
                {state.currentMentor?.name}
              </h4>
              <h5 className="mt-2 mb-2">
                {selectedDate?.toDateString() || ""} @
                {("0" + (selectedHour || NaN)).slice(-2)}
                :00
              </h5>
              <form onSubmit={createNewCall}>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="meeting-reason"
                    placeholder="Input a reason for the meeting"
                    required
                  />
                </div>
                <div className="form-group  mt-4 form-btn">
                  <button
                    type="submit"
                    className="btn btn-outline-primary mx-1"
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={closeTooltip}
                    className="btn btn-outline-secondary  mx-1"
                  >
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </Popup>
          {renderHours()}
        </div>
      </div>
    </div>
  );
};

export default CallCalender;
