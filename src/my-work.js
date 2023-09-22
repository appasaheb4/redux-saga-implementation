import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getWorkListAction} from './redux/actions/my-work';
const MyWork = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.myWork);

  //console.log({data});
  return (
    <div style={{padding: 20}}>
      <button
        onClick={() => {
          dispatch(getWorkListAction());
        }}
      >
        Fetch data
      </button>
      {data.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
};

export default MyWork;
