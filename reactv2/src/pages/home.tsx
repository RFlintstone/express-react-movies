// Requirements
import React, {Component} from 'react';
const api = require('../modules/imdb');

// Define interfaces so the variables can be used + specify types
interface ICharacter {
    title: string;
    year: string;
    id: string;
    type: string;
    poster: string;
    trailer: string;
}

interface IProps {

}

interface IState {
    data?: ICharacter[]
    char?: ICharacter
}

// Define and export classes so it can be loaded as a page
export default class Home extends Component<IProps, IState> {
    // Define and set props and state(s)
    constructor(props: any) {
        super(props);
        this.state = {
            data: undefined,
            // item: props.item
        }
    }

    // On API mount / response pick and load a random movie
    componentDidMount() {
        api.imdb('Harry').then((data: ICharacter[]) => {
            // Return when object 'data' empty
            if (data.length === 0) {
                return
            };
            // Pick a random movie
            let i = Math.floor(Math.random() * data.length);
            let char = data[i];
            // Set movie
            this.setState({char, data})
        })
    };

    // Define 'newItem' so it can be called later when trigged by 'onClick'
    newItem = () => {
        // Return when object 'data' empty
        if (!this.state.data || this.state.data.length === 0) {
            return
        }
        // Pick a random movie
        let i = Math.floor(Math.random() * this.state.data.length);
        let char = this.state.data[i];
        // Set movie
        this.setState({char})
    }

    // Render the page with specified data
    render() {
        // Return data so it can be loaded by the client
        return (
            <div>
                <button onClick={this.newItem}>New movie!</button>

                <h2>{this.state.char?.title}</h2>
                <p><span style={{fontWeight: "bold"}}>Release: </span>{this.state.char?.year}</p>
                <a href={this.state.char?.trailer}><span style={{fontWeight: "bold"}}>Trailer: </span>{this.state.char?.trailer}</a>
                <p><span style={{fontWeight: "bold"}}>Movies: </span>{this.state.data?.length}</p>
                <img src={this.state.char?.poster}></img>
            </div>
        )
    };
}