import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note.js';
import myFirebase from '../utility/MyFirebase';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
    this.firebaseDBRef = myFirebase.getFirebaseRef();
    this.firebaseDBRef.once('value').then((snapshot) => {
      this.addNote(snapshot.val());
    });
  }

  // Board.js Board Component Class Function

  addNote(notes) {
    console.log(notes);
    if(notes){
      for(let key in notes){
        this.state.notes.push(
          {
            id: key,
            title: notes[key].title,
            body: notes[key].body
          }
        );
      }
    } else {
      this.state.notes.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }
}

  deleteNote(id){
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index,1);
      }
    });
    this.setState(
      {
        notes: newNoteArr
      }
    );
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">

          {
            this.state.notes.map(item => {
                return <Note key={note.id} id={note.id} title={note.title} body={note.body} deleteHandler={this.deleteNote.bind(this)}/>
              })
          }

          {/* <Note title="Class Notes" body="Always use constructors when extending another class"/>
            <Note title="My New Address" body="2001 N Lonhill Phoenix, AZ 81234"/>
            <Note title="React Notes" body="Everything in React is a component"/>
            <Note /> */}
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this, null)}>Add</button>
        </div>
      </div>
    );
  }
}

export default Board;