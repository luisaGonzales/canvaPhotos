import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {HashRouter} from 'react-router-dom';
import {ImageUpload} from './Upload';
import {draw} from './Actions';
import {Button, Image} from 'react-bootstrap';

const App = ({allImage})=> {
  return(
    <div>
      <ImageUpload />
      <Button onClick={()=>{draw()}}>DRAW</Button>
      <Image src={allImage} />
    </div>
  );
}

const mapToProps = ({allImage}) => ({allImage})
export default connect (mapToProps)(App);
