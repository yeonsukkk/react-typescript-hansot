import React from 'react';
import { HansotPromise } from 'component/HansotPromise';
import { Shortcut } from 'component/Shortcut';
import { Philosophy } from 'component/Philosophy';
import { MainNews } from 'component/MainNews';
import { MainVisual } from 'component/MainVisual';

export const Home: React.FC = () => {
  return (
    <>
      <div id='mainWrap'>
        <MainVisual />
        <HansotPromise />
        <Shortcut />
        <Philosophy />
        <MainNews />
      </div>
    </>
  );
};
