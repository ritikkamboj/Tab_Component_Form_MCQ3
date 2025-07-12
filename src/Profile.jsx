import React from 'react'

function Profile({ data, setData }) {

    const { name, age, email } = data;

    function handleChange(e, data) {
        setData(prevData => {
            return {
                ...prevData,
                [data]: e.target.value
            }

        })

    }
    return (
        <>
            <h1>Profile</h1>
            <div>
                <label >Name :</label>
                <input type="text" value={name} onChange={(e) => handleChange(e, "name")} />
            </div>
            <div>
                <label >Age : </label>
                <input type="number" value={age} onChange={(e) => handleChange(e, "age")} />
            </div>
            <div>
                <label >Email  : </label>
                <input type="text" value={email} onChange={(e) => handleChange(e, "email")} />
            </div>

        </>
    )
}

export default Profile