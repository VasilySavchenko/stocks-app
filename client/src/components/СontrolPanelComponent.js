import React from 'react';

function ControlPanelComponet({ handleStart, handleStop }) {
  return (
    <div className="bg-dark">
      <button
        type="button"
        className="btn btn-success  m-3"
        onClick={handleStart}
      >
        Start
      </button>
      <button type="button" className="btn btn-danger" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}
export default ControlPanelComponet;
