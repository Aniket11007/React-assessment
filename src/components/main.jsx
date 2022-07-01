import React from 'react';
import cardInfo from './cards'
import '../css/main.css'

function Cardstruc(props) {
    return (
        <>
            <div className={props.id + " " + "cards"}>
                <img src={require(`../img/${props.img}.jpg`)} alt=""></img>
                <p>{props.cardfname}</p>
            </div>
        </>
    )
}

function createCard(info) {
    return (
        <Cardstruc id={info.id} key={info.id} img={info.img} cardfname={info.cardfname} price={info.price} />
    )
}

function Dashboard() {
    return (
        <div className="dashboard">
            {cardInfo.map(createCard)}
        </div>
    );
  }
  export default Dashboard;