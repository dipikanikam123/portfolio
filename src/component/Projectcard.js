import React from 'react'
import img from '../assets/bg.svg'
import 'remixicon/fonts/remixicon.css'
import { Data } from './Data'

const Projectcard = ({project}) => {
    return (
        <div>
            <div className='project-card'>
                <div className='project-links'>
                  <a href='https://github.com/dipikanikam123'  ><span><i class="ri-github-fill"></i></span></a>
                  <a href=''><span><i class="ri-chrome-fill"></i></span></a>
                </div>
                <div>
                <img src={img} height={'150px'} />
                </div>
                <h2>{project?.name}</h2>
                <p>{project?.info}</p>

            </div>
        </div>
    )
}

export default Projectcard
