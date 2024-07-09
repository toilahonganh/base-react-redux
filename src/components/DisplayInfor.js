import React from 'react';
import "./DisplayInfor.scss";


class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        const { listUser } = this.props;
        return (
            <div className='display-infor-container'>
                <div>
                    <p className='span-color ' onClick={() => { this.handleShowHide() }}> {this.state.isShowListUser === true ? "Hide list user" : "Show list user"} </p>
                </div>

                {this.state.isShowListUser &&
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
}

export default DisplayInfor;