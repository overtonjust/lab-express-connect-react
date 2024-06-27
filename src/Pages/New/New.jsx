// Dependencies
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const New = () => {
    const navigate = useNavigate()
    const [newCaptain, setNewCaptain] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0
    })
    const APIKEY = process.env.REACT_APP_API_KEY;

    const handleChange = (e) => {

        setNewCaptain((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleCheckBox = (e) => {
        setNewCaptain((prevState) => {
            const mistakes = !newCaptain.mistakesWereMadeToday
            return { ...prevState, mistakesWereMadeToday: mistakes }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        fetch(APIKEY, {
            method: 'POST',
            body: JSON.stringify(newCaptain),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                navigate('/logs')
            })
            .catch(err => console.error(err))

    }


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Log</legend>
                <input 
                    type="text"
                    placeholder="Captain Name"
                    name="captainName"
                    value={newCaptain.captainName}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Title'
                    name="title"
                    value={newCaptain.title}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Post'
                    name="post"
                    value={newCaptain.post}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="checkbox"
                    id="mistakes"
                    checked={newCaptain.mistakesWereMadeToday}
                    onChange={handleCheckBox}
                />
                <label htmlFor="mistakes">Mistakes were made</label>
                <br/>
                <input 
                    type="number" 
                    id="crisis"
                    name="daysSinceLastCrisis"
                    value={newCaptain.daysSinceLastCrisis}
                    onChange={handleChange}
                />
                <label htmlFor="crisis">Days since last crisis</label>
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default New;