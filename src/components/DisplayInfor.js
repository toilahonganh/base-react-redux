import React from 'react';


class DisplayInfor extends React.Component {
    render() {
        console.log(this.props);
        const { listUser } = this.props;
        return (
            <div>
                {listUser.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>

                            <hr />
                        </div>
                    )
                })}
                {/* <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div>
                <hr />

                <div>My name's {this.props.name}</div>
                <div>My age's {this.props.age}</div>
                <hr /> */}
            </div>
        )
    }
}

export default DisplayInfor;