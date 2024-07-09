import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Dũng", age: 28 },
            { id: 3, name: "Hà", age: 18 },
        ]
    }
    handleAddNewUser = (userObject) => {
        this.setState({
            listUser: [...this.state.listUser, userObject]
        })

        // let listUsers = [...this.state.listUser];
        // listUsers.push(userObject)

        // this.setState({
        //     listUser: listUsers
        // })
    }
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUser={this.state.listUser}
                />


            </div>
        );
    }
}
export default MyComponent;