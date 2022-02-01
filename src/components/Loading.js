import React, { Component } from 'react'
import Spinner from "./Spinner.gif"

const Loading = () => {
  return <div className='text-center my-3'>
  <img src={Spinner} style={{height:"50px", width:"50px"}}
   alt="Loading" />
</div>
};

export default Loading;
