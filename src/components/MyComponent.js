import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "Dũng", age: 28, address: "228 Nam Kì Khởi Nghĩa, p. Võ Thị Sáu, Quận 3, TP Hồ Chí Minh" },
            { id: 3, name: "Hà", age: 18, address: "2 Đường Ngô Quyền, p. Nghĩa Lộ, Quận Hoàn Kiếm, Thủ đô Hà Nội" },
        ]
    }
    handleAddNewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })

        // let listUsers = [...this.state.listUser];
        // listUsers.push(userObject)

        // this.setState({
        //     listUser: listUsers
        // })
    }
    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser];

        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserClone
        })
        alert("Xóa thành công");
    }
    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                </div>
                <br />
                <div className="b">
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>


            </>
        );
    }
}
export default MyComponent;