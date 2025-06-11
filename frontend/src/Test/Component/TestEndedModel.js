import React from 'react';

const TestEndedModel = ({ autoSubmitMarks, onLogout }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Test Ended</h2>
        {autoSubmitMarks !== null ? (
          <p className="mb-4">
            Time is up! Your test was auto-submitted.<br/>
            Marks: <b>{autoSubmitMarks}</b>
          </p>
        ) : (
          <p className="mb-4">This test is no longer active. Your session has ended.</p>
        )}
        <button
          className="bg-orange-600 text-white px-4 py-2 rounded"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TestEndedModel;