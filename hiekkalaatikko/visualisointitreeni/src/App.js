import React, {Component} from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import Chart from './components/chart';

// tähän tulokset jsonmuodossa palvelimelta
const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error('something went wrong')
                }
            })
            //suodatetaan tulokset (jos halutaan?)
            .then(response => this.setState({
                    results: response.results.filter((r) => {
                        return r.name === 'Java'
                    })
                })
            )
    }

    render() {
        const {results} = this.state;

        return (
            <div className="App">
                <Chart data={results}/>
            </div>
        );
    }
}

export default App;
