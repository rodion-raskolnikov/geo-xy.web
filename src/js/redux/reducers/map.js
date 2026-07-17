import { MAP_SET_CENTER } from "../actions/action-types";

const initialState = {
  center: { lat: 38.81386719961395, lng: -77.63939566803032 },
};

export const map = (state = initialState, action) => {
  switch (action.type) {
    case MAP_SET_CENTER:
      return { ...state, ...{ center: action.center }};
    default:
      return state;
  }
};
