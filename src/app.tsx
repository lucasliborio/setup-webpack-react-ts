import React from 'react';
import { ClickCounter } from './click-counter';
import Image from '../public/assets/usnfwspatch.svg';

export const App: React.FC = () => {
  return (
    <>
      <h1>Template webpack for React again</h1>
      <p>{process.env.name}</p>
      <img src={Image}></img>
      <ClickCounter />
    </>
  );
};
