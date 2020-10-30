import React from 'react';
import { useDispatch} from 'react-redux';
import {  update, load } from './redux/actionCreators';

function Buttons() {
  const dispatch = useDispatch();

  function makeReq(str) {
    dispatch(load(false)); dispatch(update(str))
  }

  return (<div className="buttons">
    <button onClick={()=>{makeReq('frontend')}}>Frontend</button>
    <button onClick={()=>{makeReq('react')}}>Reactjs</button>
    <button onClick={()=>{makeReq('vue')}}>Vuejs</button>
    <button onClick={()=>{makeReq('angular')}}>Angular</button>
  </div>)
}

export default Buttons;
