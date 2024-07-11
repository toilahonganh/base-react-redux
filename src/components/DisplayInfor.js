import React, { useState } from 'react';
import "./DisplayInfor.scss";
import logo from "./../logo.svg";


// class DisplayInfor extends React.Component {
//     constructor(props) {
//         console.log(">>call me constructor");
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }


//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser
//         })
//     }

//     render() {
//         console.log(">> call me render");
//         const { listUser } = this.props;
//         return (
//             <div className='display-infor-container'>
//                 <img src={logo} alt="Logo" />

//                 <div>
//                     <p className='span-color ' onClick={() => { this.handleShowHide() }}> {this.state.isShowListUser === true ? "Hide list user" : "Show list user"} </p>
//                 </div>

//                 {true &&
//                     <div>
//                         <div>
//                             {listUser.map((user, index) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                         <div>
//                                             <span className='span-color'>
//                                                 Tên khách hàng:
//                                             </span>
//                                             <p className='text-style'>{user.name}</p>
//                                         </div>
//                                         <div>
//                                             <span className='span-color'>
//                                                 Độ tuổi:
//                                             </span>
//                                             <p className='text-style'>{user.age}</p>
//                                         </div>
//                                         <div>
//                                             <span className='span-color'>
//                                                 Địa chỉ:
//                                             </span>
//                                             <p className='text-style'>{user.address}</p>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         </div>
//                                         <hr />
//                                     </div>
//                                 )

//                             })}
//                         </div>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        console.log("Click handle");

        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className='display-infor-container'>
            <img src={logo} alt="Logo" />
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Ẩn thông tin" : "Hiển thị thông tin"}
                </span>
            </div>

            {isShowHideListUser &&
                <div>
                    <div>
                        {listUser.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <div>
                                        <span className='span-color'>
                                            Tên khách hàng:
                                        </span>
                                        <p className='text-style'>{user.name}</p>
                                    </div>
                                    <div>
                                        <span className='span-color'>
                                            Độ tuổi:
                                        </span>
                                        <p className='text-style'>{user.age}</p>
                                    </div>
                                    <div>
                                        <span className='span-color'>
                                            Địa chỉ:
                                        </span>
                                        <p className='text-style'>{user.address}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )

                        })}
                    </div>
                </div>
            }
        </div>
    )
}


export default DisplayInfor;