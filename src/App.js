import React, { Component } from "react";
import Card from "./components/Card";
import "./App.css";
import Bowser from "./images/bowser.jpg";
import BabyMario from "./images/babymario.jpg";
import Daisy from "./images/daisy.jpg";
import Green from "./images/daisy.jpg";
import Koopa from "./images/koopa.jpg";
import Peach from "./images/peach.png";
import Toadstool from "./images/toadstool.jpg";
import Wario from "./images/wario.jpg";
import Star from "./images/star.png";
import Refresh from "./images/refresh.png";

class App extends Component {
  state = {
    message: "match the cards to win the game",
    cards: [
      { flipped: false, image: Bowser },
      { flipped: false, image: BabyMario },
      { flipped: false, image: Daisy },
      { flipped: false, image: Green },
      { flipped: false, image: Koopa },
      { flipped: false, image: Peach },
      { flipped: false, image: Toadstool },
      { flipped: false, image: Wario },
      { flipped: false, image: Bowser },
      { flipped: false, image: BabyMario },
      { flipped: false, image: Daisy },
      { flipped: false, image: Green },
      { flipped: false, image: Koopa },
      { flipped: false, image: Peach },
      { flipped: false, image: Toadstool },
      { flipped: false, image: Wario }
    ],
    firstFlip: null,
    secondFlip: null
  };

  flipHandler = index => {
    if (this.state.firstFlip == null) {
      let newCards = this.state.cards;
      newCards[index].flipped = true;
      this.setState({ cards: newCards, firstFlip: index });
    } else if (this.state.secondFlip == null) {
      let newCards = this.state.cards;
      newCards[index].flipped = true;
      this.setState({ cards: newCards, secondFlip: index });
    }
  };

  //this is a React Lifecycle method - read the docs
  componentDidUpdate() {
    //object destructuring so I don't have to keep typing this.state.
    const { firstFlip, secondFlip, cards } = this.state;

    if (firstFlip != null && secondFlip != null) {
      if (cards[firstFlip].image == cards[secondFlip].image) {
        console.log("its a match");
        this.setState({ firstFlip: null, secondFlip: null });
      } else if (cards[firstFlip].image != cards[secondFlip].image) {
        setTimeout(() => {
          let newCards = this.state.cards;
          newCards[firstFlip].flipped = false;
          newCards[secondFlip].flipped = false;

          this.setState({ cards: newCards, firstFlip: null, secondFlip: null });
        }, 1000);
      }
    }
    this.winningLogic();
  }

  winningLogic = () => {
    //write a function that determines a winner (every card is turned over)
    //there's an array method called -every- which you might want to look up.
    //you then need to decided where the best place to call this method is.
  };

  render() {
    return (
      <div className="container">
        <h1>Memory Game</h1>
        <div className="score">
          <img src={Star} className="star" alt="Star" />
          <img src={Star} className="star" alt="Star" />
          <img src={Star} className="star" alt="Star" />
          <p>0 move(s)</p>
          <p>0 mins 0 secs</p>
          <img src={Refresh} className="refresh" alt="Refresh" />
        </div>
        <div className="board">
          {this.state.cards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                flipped={card.flipped}
                click={() => this.flipHandler(index)}
              />
            );
          })}
          <p className="message">{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;
