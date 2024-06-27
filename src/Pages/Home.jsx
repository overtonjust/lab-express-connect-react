// Dependencies
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
                <h4 className='dashboard__header'>Mistakes</h4>
                <h4 className='dashboard__header'>Captain Name</h4>
                <h4 className='dashboard__header'>See this log</h4>
            </header>
            <ul className='dashboard__list'>
                {loading ? <div>loading...</div> 
                :
                    logs.map((log, index) => {
                        return(
                            <li className='dashboard__list-item' key={index}>
                                <Link className='dashboard__text' to='/' >{log.mistakesWereMadeToday ? 'yup' : 'nope'}</Link>
                                <Link className='dashboard__text' to='/' >{log.captainName}</Link>
                                <Link className='dashboard__text' to='/' >{log.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    );
};

export default Home;