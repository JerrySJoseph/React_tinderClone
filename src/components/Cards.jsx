import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './styles/cards.css'

export default function TinderCards() {
    const [people, setpeople] = useState([
        {
            name: "Shahrukh Khan",
            url: "https://static.toiimg.com/photo/msid-69902898/69902898.jpg?115506"
        },
        {
            name: "Hrithik Roshan",
            url: "https://imagevars.gulfnews.com/2020/01/22/Hrithik-Roshan--3--1579703264814_16fcda6e62f_medium.jpg"
        }
    ])
    return <div className="tinderCards" >
        <div className="tinderCards_cardContainer">
            {people.map((person) => {
                return <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => OutofFrame(person.name)}
                >
                    <div className="cards" style={{ backgroundImage: "url(" + person.url + ")" }}>
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>

            })}
        </div>

    </div>
}
const swiped = (direction, name) => {
    console.log("removing card for " + name);
}
const OutofFrame = (name) => {
    console.log(name + " removed.")
}

