import React from 'react';
import Statusbar from '../components/Statusbar';
import Navbar from '../components/Pendant/Navbar';
import RobotTaskContainer from '../components/RobotTask/RobotTaskContainer';
import RobotTaskController from '../components/RobotTask/RobotTaskController';

export default function ProgramPage() {
  return (
    <div>
      <Statusbar />
      <Navbar />
      <RobotTaskContainer />
      <RobotTaskController />
    </div>
  );
}
