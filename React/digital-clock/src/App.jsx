import React from 'react';
import DigitalClock from './DigitalClock';

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212'
    }}>
      <DigitalClock />
    </div>
  );
};

export default App;
