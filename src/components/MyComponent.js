import React from "react";


class MyComponent extends React.Component {
    state = {
        name: "Dinh Hong Anh",
        address: "Ho Chi Minh",
        age: 22
    }
    handleCick(event) {
        console.log("Random number: ", Math.floor((Math.random() * 100) + 1));
        this.setState({
            name: "Harry Pham Dev",
            age: Math.floor((Math.random() * 100) + 1)
        })
        console.log(event);

    }
    handleOnMouseHover(event) {
        console.log(event.pageX);
    }
    handleOnChangeInput = (event) => {
        this.setState({
            address: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}. I live in {this.state.address}. And i'm {this.state.age}.
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Change</button>
                </form>
            </div>
        );
    }
}
export default MyComponent;