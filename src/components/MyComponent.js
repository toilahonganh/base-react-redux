import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Hoidanit", age: 30 },
            { id: 2, name: "Hong Anh", age: 22 },
            { id: 3, name: "Howl", age: 18 },
            { id: 4, name: "Hip", age: 16 },
        ]
    }
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor
                    listUser={this.state.listUser}

                />


            </div>
        );
    }
}
export default MyComponent;