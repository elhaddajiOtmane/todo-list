import React from 'react';
const clients=[{nom:"ALAMI",prenom:"Ali",age:"22"},
                {nom:"HAMDI",prenom:"Rabiaa",age:"33"},
                {nom:"MAHDI",prenom:"Amine",age:"31"}
];
var ind=0;
export default class Client extends React.Component{
    constructor(){
        super();
        this.state={client:clients[ind]};
    }
    suivant(){
        if(ind<2)
            ind=ind+1;
        this.setState({client:clients[ind]});
    }
    precedent(){
        if(ind>0)
            ind=ind-1;
        this.setState({client:clients[ind]});
    }
    render(){
        return(
            <div>
                <p><b>Nom:</b>{this.state.client.nom}</p>
                <p><b>Prénom:</b>{this.state.client.prenom}</p>
                <p><b>Age:</b>{this.state.client.age}</p>
                <hr/>
                <button onClick={()=>this.precedent()}>Précédent</button>
                <button onClick={()=>this.suivant()}>Suivant</button>
            </div>
        );
    }
}