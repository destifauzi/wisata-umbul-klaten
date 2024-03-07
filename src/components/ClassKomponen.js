import react, { Component } from 'react';

class ClassKomponen extends Component {
    state = {
        name: "Desti",
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default ClassKomponen;