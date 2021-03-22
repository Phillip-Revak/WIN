import React, {Component} from 'react';
import '../CSS/Board.css';
import Item from './Item';
import Pic1 from './images/bredToe.jpg'
import Pic2 from './images/JordanSquareFlip.png'
import Pic3 from './images/hatsquare.jpg'
import Pic4 from './images/hat2square.jpg'
import Pic5 from './images/JordanJerseySquare.jpg'
import Pic6 from './images/Jersey2Square.jpg'

class Board extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            <Item title="Class Notes" body="Here is info about the product" price="$40.00" pic={Pic1} />
            <Item title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234" price="$40.00" pic={Pic2}/>
            <Item title="React Notes" body="Everything in React is a component" price="$40.00" pic={Pic3}/>
            <Item title="Class Notes" body="Always use constructors when extending another class" price="$40.00" pic={Pic4}/>
            <Item title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234" price="$40.00" pic={Pic5}/>
            <Item title="React Notes" body="Everything in React is a component" price="$40.00" pic={Pic6}/>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Board;