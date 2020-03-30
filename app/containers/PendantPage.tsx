import React from 'react';
import Pendant from '../components/Pendant';
import Statusbar from '../components/Statusbar';
import Navbar from '../components/Pendant/Navbar';

export default function PendantPage() {
  return (
    <div>
      <Statusbar />
      <Navbar />
      <Pendant />
    </div>
  );
}
