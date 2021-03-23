import { Button, Modal } from 'react-bootstrap'
import React, { Component } from 'react'
import Item from "./Item";
import '../CSS/Mbutton.css';
import Pic1 from './images/bredToe.jpg'
import Pic2 from './images/JordanSquareFlip.png'
import Pic3 from './images/hatsquare.jpg'
import Pic4 from './images/hat2square.jpg'
import Pic5 from './images/JordanJerseySquare.jpg'
import Pic6 from './images/Jersey2Square.jpg'

class Mbutton extends Component {
  constructor()
    {
      super()
      this.state={
        show:false,
      }
    }
    handleModal()
    {
      this.setState({show: !this.state.show})
    }
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <Button onClick={()=>{this.handleModal()}}>View</Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}> 
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body ><div className="row">
            <div className="popUp">
              <h1>{this.props.title}</h1>
              <img src={this.props.pic}></img>
              <p>{this.props.price}</p>
              <p class="descrip">{this.props.body}</p>
            </div>
            </div>
            </Modal.Body>
        </Modal>
      </div>
    )
  }
}
export default Mbutton;