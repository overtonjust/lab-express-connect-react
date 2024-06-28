// Dependencies
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    const navigate = useNavigate()
    const { index } = useParams()
    const [captain, setCaptain] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })

    useEffect(() => {
        fetch(`${APIKEY}/${index}`)
            .then(res => res.json())
            .then(res => {
                setCaptain(res)
            })
            .catch(err => console.log(err))
    },[])

    const APIKEY = process.env.REACT_APP_API_KEY;

    const handleChange = (e) => {

        setCaptain((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckBox = (e) => {
        setCaptain((prevState) => {
            const mistakes = !captain.mistakesWereMadeToday
            return { ...prevState, mistakesWereMadeToday: mistakes }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${APIKEY}/${index}`, {
            method: 'PUT',
            body: JSON.stringify(captain),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                return navigate('/logs')
            })
            .catch(err => console.error(err))

    }


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Edit Log</legend>
                <input 
                    type="text"
                    placeholder="Captain Name"
                    name="captainName"
                    value={captain.captainName}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Title'
                    name="title"
                    value={captain.title}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Post'
                    name="post"
                    value={captain.post}
                    onChange={handleChange}
                />
                <br/>
                <div className='form-box'>
                    <label htmlFor="mistakes">Mistakes were made</label>
                    <input 
                        className='check-box'
                        type="checkbox"
                        id="mistakes"
                        checked={captain.mistakesWereMadeToday}
                        onChange={handleCheckBox}
                    />
                </div>
                <br/>
                <div className='form-box'>
                    <label htmlFor="crisis">Days since last crisis</label>
                    <input 
                        className='number-box'
                        type="number" 
                        id="crisis"
                        name="daysSinceLastCrisis"
                        value={captain.daysSinceLastCrisis}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default Edit;