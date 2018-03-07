import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <h1>hi, this is React.</h1>
        );
    }
}
const element = document.getElementById('app');
ReactDOM.render(<App />, element);