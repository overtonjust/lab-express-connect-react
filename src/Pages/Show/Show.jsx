// Dependencies
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Show.scss'

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
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                alert(res.message)
                navigate('/logs')
            })
            .catch(err => console.error(err))
    }

    if(loading) return <div>Loading...</div>
    return (
        <> 
            <button className='showcard__back'><Link className='showcard__link' to='/logs'> - Back</Link></button>
            <article className='showcard'>
                <h2 className='showcard__title'>{captain.title}</h2>
                <div className="showcard__details">
                    <p className='showcard__crisis'>[LC:{captain.daysSinceLastCrisis} D]</p>
                    <p className='showcard__name'>{captain.captainName}:</p>
                    <p className='showcard__post'>{captain.post}</p>
                    <button className='showcard__button'><Link className='showcard__link' to={`/logs/${index}/edit`}>Edit</Link></button>
                    <button className='showcard__button' onClick={handleDelete}>Delete</button>
                </div>
            </article>
        </>
    );
};

export default Show;