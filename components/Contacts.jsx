import React, { useState, useRef } from 'react'
import CustomHook from './CustomHook';
import {contactdata} from '../constants.js'

function Contacts() {
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section id={"contact"} className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
            {contactdata.tagline}
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          contactdata.contactdetails.map((value) => (
            <div className='item' key={value.id}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
