import React, {Component} from 'react';
import { render } from 'react-dom';

class Phillip extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('http://openlibrary.org/search.json?author=tolkien')
        .then(response => response.json())
        .then(data => {
            this.setState({
                items: data,
            })
        })
    }



render() {

    const {items} = this.state;

        return(
            <div>
                {/* {console.log(this.state.items)} */}
                {items.map(item => <div>{this.state.item}</div>)}
            </div>
            );
    }
}

export default Phillip;