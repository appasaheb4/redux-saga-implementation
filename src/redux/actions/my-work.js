export const FETCH_WORK_LIST = 'FETCH_WORK_LIST';
export const SET_WORK_LIST = 'SET_WORK_LIST';

export const getWorkListAction = () => {
  return {
    type: FETCH_WORK_LIST,
  };
};

export const setWorkListAction = (payload) => {
  return {
    type: SET_WORK_LIST,
    payload,
  };
};
