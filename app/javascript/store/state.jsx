import { createContext } from "react";

const initialState = {
  currentUser: null,
  currentMentor: null,
};

const Actions = {
  SIGNIN: "signIn",
  SET_MENTOR: "setMentor",
};

function reducer(state, action) {
  switch (action.type) {
    case Actions.SIGNIN:
      return { ...state, currentUser: action.data };
    case Actions.SET_MENTOR:
      return { ...state, currentMentor: action.data };
    default:
      return state;
  }
}

const StateConext = createContext();
const updateConext = createContext();
export const Action = Actions;
export const Reducer = reducer;
export const Context = StateConext;
export const UpdateContext = updateConext;
export const DefaultState = initialState;
