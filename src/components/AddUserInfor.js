import React, { useState } from 'react';


const AddUserInfor = (props) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('Ho Chi Minh');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value);

    }
    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '_random',
            name: name,
            age: age
        });
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)

    }
    const handleOnChangeAddress = (event) => {
        setAddress(event.target.address);

    }
    return (
        <div>
            My name is {name}. I live in {address}. And i'm {age}.
            <br />

            <label>Type name: </label>
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => handleOnChangeInput(event)}
                />
            </form>

            <label>Type age: </label>
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <input
                    value={age}
                    type="text"
                    onChange={(event) => handleOnChangeAge(event)}
                />
            </form>

            <label>Type address: </label>
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <input
                    value={address}
                    type="text"
                    onChange={(event) => handleOnChangeAddress(event)}
                />

                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;