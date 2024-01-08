import React from 'react';
import './App.css';
import HelloWorld from './components/(1)HelloWorld.js';
import Jsx from './components/(2)Jsx.js';
import RenderingElements from './components/(3)RenderingElements.js';
import Components from './components/(4)Components.js';
import Props from './components/(5)Props.js';
import State from './components/(6)State.js';
import LifecycleMethods from './components/(7)LifecycleMethods.js';
import HandlingEvents from './components/(8)HandlingEvents.js';
import ConditionalRendering from './components/(9)ConditionalRendering.js';
import Lists from './components/(10)Lists.js';
import Keys from './components/(11)Keys.js';
import Forms from './components/(12)Forms.js';
import LiftingStateUp from './components/(13)LiftingStateUp.js';
import Composition from './components/(14)Composition.js';
import ThinkingInReact from './components/(15)ThinkingInReact.js';

const App = () => {
  const Name = "Md Arwaz";

  const parentAlert = (data) => {
    alert(data);
  };

  return (
    <div className='App'>
      <h2>Hello World</h2>
      <HelloWorld /><br />

      <h2>JSX</h2>
      <Jsx /><br />

      <h2>Rendering Elements</h2>
      <RenderingElements /><br />

      <h2>Components</h2>
      <Components /><br />

      <h2>Props</h2>
      <Props myName={Name} myBioData={{ age: 24, qualification: "B.Tech (CSE)", address: "ward no.10, Jitwarpur Kumhira, Dist-Samastipur, Bihar, 848127", contact: "+918340723693" }} /><br />

      <h2>State</h2>
      <State /><br />

      <h2>Lifecycle Methods</h2>
      <LifecycleMethods /><br />

      <h2>Handling Events</h2>
      <HandlingEvents /><br />

      <h2>Conditional Rendering</h2>
      <ConditionalRendering /><br /><br />

      <h2>Lists</h2>
      <Lists /><br />

      <h2>Keys</h2>
      <Keys /><br />

      <h2>Forms</h2>
      <Forms /><br />

      <h2>Lifting State Up</h2>
      <LiftingStateUp alert={parentAlert} /><br />

      <h2>Composition</h2>
      <Composition /><br />

      <h2>Thinking in React</h2>
      <ThinkingInReact />
    </div>
  );
};

export default App;

// Finished.