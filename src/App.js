import React, { Component } from 'react';
import GeoJson from "./geo.json"
import YandexMap from "./YandexMap";



class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            coordinates:null
        };
    }

    componentDidMount() {
        this.setState(
            {
                coordinates: GeoJson.path.coordinates
            }
        )
    }
    render() {
        return (
            <>
                <YandexMap coordinates = {this.state.coordinates} />
            </>
        );
    }
}

export default App;
