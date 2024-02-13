import React from 'react';

const ConfessionModal = ({ confession }) => {
  return (
    <div className="confessionModal">
      <h2>{confession.title}</h2>
      <p>Age: {confession.age}</p>
      <p>{confession.confession}</p>
    </div>
  );
};

export default ConfessionModal;
