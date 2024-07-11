import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";


const MyComponent = (props) => {
    const [listUsers, setListUser] = useState(
        [
            { id: 1, name: "Dũng", age: 28, address: "228 Nam Kì Khởi Nghĩa, p. Võ Thị Sáu, Quận 3, TP Hồ Chí Minh" },
            { id: 3, name: "Hà", age: 18, address: "2 Đường Ngô Quyền, p. Nghĩa Lộ, Quận Hoàn Kiếm, Thủ đô Hà Nội" },
        ]
    );

    const handleAddNewUser = (userObject) => {
        setListUser([userObject, ...listUsers]);

    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone);

        alert("Xóa thành công");
    }


    return (
        <>
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
            </div>
            <br />
            <div className="b">
                <DisplayInfor
                    listUser={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
        </>
    )
}

export default MyComponent;