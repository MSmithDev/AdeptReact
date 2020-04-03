import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from '@giantmachines/redux-websocket';

export default function RobotWebsocket() {
  const dispatch = useDispatch();

  dispatch(connect('ws://127.0.0.1:8888/'));

  return <div />;
}
