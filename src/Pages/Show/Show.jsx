// Dependencies
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Show = () => {
    const [loading, setLoading] = useState(false);
    const [captain, setCaptain] = useState(false);
    const { index } = useParams();
    const navigate = useNavigate()

    const APIKEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        setLoading(true)
        fetch(`${APIKEY}/${index}`)
            .then(res => res.json())
            .then(res => {
                setCaptain(res)
                setLoading(false)
            })
            .catch(err => console.log(err))
    },[index])

    const handleDelete = () => {
        fetch(`${APIKEY}/${index}`, {
            method: 'DELETE',
            body: JSON.stringify(captain),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                alert(res.message)
                navigate('/logs')
            })
            .catch(err => console.error(err))
    }


    return (
        <>
            {loading ? <div>Loading...</div> 
            : 
                <article className='showcard'>
                    <h1 className='showcard__name'>{captain.captainName}</h1>
                    <h1 className='showcard__title'>{captain.title}</h1>
                    <h1 className='showcard__post'>{captain.post}</h1>
                    <h1 className='showcard__mistakes'>{captain.mistakesWereMadeToday}</h1>
                    <h1 className='showcard__title'>{captain.daysSinceLastCrisis}</h1>
                    <button><Link to='/logs'>Back</Link></button>
                    <button><Link to={`/logs/${index}/edit`}>Edit</Link></button>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            }
        </>
    );
};

export default Show;