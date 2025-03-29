import React from 'react';


interface ProgressBarProps {
  count: string;
  description: string;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ count, description }) => {
  return (
    <div className='text-center'>
      <h3 className='text-blue-200 heading3'>{count}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProgressBar;