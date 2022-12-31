import React from 'react';
import Eleve from './components/Eleve';
export default function App() {
  const eleves=[
    {nom:"Hamdi",prenom:"Sami",age:"13"},
    {nom:"Mahdi",prenom:"Amine",age:"18"},
    {nom:"Fahmi",prenom:"Omar",age:"12"}
  ];
  return (
    <div>
      {
        eleves.map((eleve,index)=><Eleve key={index} personne={eleve}/>)
      }
    </div>
  );
}
