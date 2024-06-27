// Dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiCornerExplosion } from "react-icons/gi";
import './Home.scss'

const Home = () => {
    const [logs,setLogs] = useState([]);
    const [loading, setLoading] = useState(false)

    const APIKEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        setLoading(true)
        fetch(APIKEY)
            .then(res => res.json())
            .then(res => {
                setLogs(res)
                setLoading(false)
            })
            .catch(err => console.log(err))
    },[])
    

    return (
        <main className='dashboard'>
            <header className='dashboard__headers'>
                <h3 className='dashboard__header'>Mistakes</h3>
                <h3 className='dashboard__header'>Captain Name</h3>
                <h3 className='dashboard__header'>See this log</h3>
            </header>
            <ul className='dashboard__list'>
                {loading ? <div>loading...</div> 
                :
                    logs.map((log, index) => {
                        return(
                            <li className='dashboard__list-item' key={index}>
                                <Link className='dashboard__text' to='/' >{log.mistakesWereMadeToday ? <GiCornerExplosion className='dashboard__icon'/> : ''}</Link>
                                <Link className='dashboard__text' to={`/logs/${index}`} >{log.captainName}</Link>
                                <Link className='dashboard__text' to={`/logs/${index}`} >{log.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
};

export default Home;