import React from 'react'

function Profile({ data, setData , errors}) {

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
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
                <label >Age : </label>
                <input type="number" value={age} onChange={(e) => handleChange(e, "age")} />
                                {errors.age && <span className='error'>{errors.age}</span>}

            </div>
            <div>
                <label >Email  : </label>
                <input type="text" value={email} onChange={(e) => handleChange(e, "email")} />
                                {errors.email && <span className='error'>{errors.email}</span>}

            </div>

        </>
    )
}

export default Profile