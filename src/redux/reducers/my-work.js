/* eslint-disable import/no-anonymous-default-export */
import {SET_WORK_LIST} from '../actions/my-work';

const initialState = {
  loading: false,
  data: [],
};

export default (state = initialState, actions) => {
  //console.log({actions});
  switch (actions.type) {
    case SET_WORK_LIST:
      return {
        ...state,
        data: actions.payload,
      };
    default:
      return state;
  }
};
