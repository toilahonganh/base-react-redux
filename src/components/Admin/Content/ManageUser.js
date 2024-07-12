import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                Quản lý user
            </div>
            <div className="users-content">
                <div>
                    <button className="btn btn-primary">Thêm người dùng</button>
                </div>
                <div>
                    Table
                </div>
                <ModalCreateUser />
            </div>
        </div>
    );
};

export default ManageUser;
