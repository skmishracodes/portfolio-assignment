import React, { useState, useRef } from 'react'
import CustomHook from './CustomHook';
import { PersonStanding, Earth} from 'lucide-react'
import { projectsdata } from '../constants.js'

function Projects() {

const divs = useRef([]);
const scrollTab = useRef();

CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
                {projectsdata.heading}
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
                {projectsdata.description}
       </div>
       <div className="list">
        {
          projectsdata.projects.map((value) => (
            <div className='item' key={value.id} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><PersonStanding /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><Earth/></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
