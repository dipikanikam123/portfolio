import React from 'react'
import img from "../assets/bg.svg"
import Projectcard from './Projectcard'
import { Data } from './Data'

const Secondpage = () => {
    return (
        <div className='second-page'>
            <h1 className='second-heading'>My Summary...</h1>
            <p className='summary-text'>my name is dipika  from nashik i recently completed batchlor degree in computer science  from pune univercityi recently join it vedant institute to join courec full stack web development in java to lern html, css,javascript,bootstrap,sql,react.js and update my skikll java  </p>

            <div className='project-container'>

                {
                    Data?.map((project) => {
                        return <Projectcard project={project} />
                    })
                }

            </div>

            <div>
                <h1 className='second-heading'>My technology</h1>
                <div className='skills-container'>
                    <span className='skill'>HTML</span>
                    <span className='skill'>CSS</span>
                    <span className='skill'>javascript</span>
                    <span className='skill'>React</span>
                    <span className='skill'>SQL</span>
                    <span className='skill'>Node js</span>

                </div>
            </div>
        </div>
    )
}

export default Secondpage
