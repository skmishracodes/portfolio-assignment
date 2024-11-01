import React, { useRef, useState } from 'react'
import CustomHook from './CustomHook';
import { skilldata } from '../constants.js'

function Skills() {

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
                {skilldata.description}
       </div>
       <div className="list">
        {skilldata.skills.map(({name, des, icon:Icon}, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <Icon/>
              <h3>{ name }</h3>
              <div className="des">{des}</div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Skills

