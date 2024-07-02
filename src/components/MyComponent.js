import React from "react";


class MyComponent extends React.Component {
    state = {
        name: "Dinh Hong Anh",
        address: "Ho Chi Minh",
        age: 22
    }
    handleCick(event) {
        // console.log("Clicked");
        console.log(event);

    }
    handleOnMouseHover(event) {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name}. I live in {this.state.address}. And i'm {this.state.age}.
                <button onClick={this.handleCick}>Click me</button>
                <button onMouseOver={this.handleOnMouseHover}>Hover me</button>

            </div>
        );
    }
}
export default MyComponent;