import React from 'react';
import Statusbar from '../components/Statusbar';
import Navbar from '../components/Pendant/Navbar';
import RobotTaskContainer from '../components/RobotTask/RobotTaskContainer';

export default function ProgramPage() {
  return (
    <div>
      <Statusbar />
      <Navbar />
      <RobotTaskContainer />
    </div>
  );
}
