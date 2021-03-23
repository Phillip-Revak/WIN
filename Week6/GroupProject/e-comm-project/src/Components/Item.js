import React, {Component} from 'react';
import '../CSS/Item.css';
import Mbutton from './Mbutton';

class Item extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="card card-view">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p>{this.props.price}</p>
            <img src={this.props.pic} />
            <br></br>
            <Mbutton pic={this.props.pic} price={this.props.price} body={this.props.body} title={this.props.title}/>
            <button className="btn btn-success" onClick={() => {alert('Item added to Cart');}}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;