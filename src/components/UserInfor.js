import React from 'react';

class UserInfor extends React.Component {
    state = {
        name: "Howl",
        address: "Ho Chi Minh",
        age: 22
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })

    }
    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })

    }
    render() {
        return (
            <div>
                My name is {this.state.name}. I live in {this.state.address}. And i'm {this.state.age}.
                <br />

                <label>Type name: </label>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                </form>

                <label>Type age: </label>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                </form>

                <label>Type address: </label>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        value={this.state.address}
                        type="text"
                        onChange={(event) => this.handleOnChangeAddress(event)}
                    />

                    <button>Change</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;