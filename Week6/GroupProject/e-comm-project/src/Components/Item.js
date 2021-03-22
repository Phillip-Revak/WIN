import React, {Component} from 'react';
import '../CSS/Item.css';

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
            <p className="hideThis">{this.props.body}</p>
            <br></br>
            <button className="btn btn-info">Specifications</button>
            <button className="btn btn-success">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;