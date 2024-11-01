import React, { useRef } from 'react'
import CustomHook from './CustomHook';
import { herodata } from '../constants.js'

const Home = () =>{

    // calling hook and providing ref for scroll detection
    const scrollTab = useRef();
    CustomHook(scrollTab);

    return (
        <section ref={scrollTab} className='home'>
            <div className="content">
                <div className="name">
                    {herodata.greeting}<span>{herodata.name}</span>
                </div>
                <div className="des">
                    {herodata.data}
                </div>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/avatar.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}
export default Home

