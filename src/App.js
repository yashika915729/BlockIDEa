import React from 'react';
import './App.css';
import SidePanel from './Components/SidePanel';
import MainArea from './Components/MainArea';
function App() {
  
  const previousProjects = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' }
  ];

  return (
    <>
      <div className="app flex">
        <SidePanel/>
        <MainArea previousProjects={previousProjects}/>
      </div>
    </>
  )
};

export default App;
