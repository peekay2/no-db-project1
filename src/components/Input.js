import React,{ Component } from "react";
import '../App.css';
import Button from "./Button";
import axios from "axios";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        // console.log(this.state.userInput);v
        this.setState({userInput: e.target.value});
    }

    handleClick() {
        this.props.search(this.state.userInput);
    }


    render() {
        return (
            <div className="input">
                <input 
                    placeholder="Find a brewery by state" 
                    value={this.state.userInput} 
                    onChange={this.handleChange}
                />
                <Button 
                    handleSubmit={() => this.handleClick}
                />
            </div>
        );
    }
}

export default Input;

