import React, { useState, useEffect, useReducer, useMemo } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MyAgenda from "./MyAgenda";
import Mentor from "./Mentor";
import Calender from "./Calender";
import {
  Reducer,
  DefaultState,
  Action,
  Context,
  UpdateContext,
} from "../store/state";
import 'bootstrap/dist/css/bootstrap.min.css'
import Calendar from "react-calendar";

const App = () => {
  const [state, dispatch] = useReducer(Reducer, DefaultState);

  const setCurrentMentor = (r) => {
    setState({ ...state, currentMentor: r });
  };
  const setCurrentUesr = (r) => {
    setState({ ...state, currentUser: r });
  };
  return (
      <UpdateContext.Provider value={{ dispatch }}>
        <Context.Provider value={{ state }}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => 
                 (
                  <Link to="/app" key={Math.random()} />
                )
              }
            />
            <Route exact path="/app" component={Mentor} />
            <Route exact path="/app/agenda" component={MyAgenda} />
            <Route exact path="/app/calendar" component={Calender} />
            <Route exact path="/app/mentors" component={Mentor} />
          </Switch>
        </Context.Provider>
      </UpdateContext.Provider>
  );
};

export default App;
