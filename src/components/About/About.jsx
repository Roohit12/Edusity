import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magni laborum voluptatem nobis amet, iure laudantium accusantium necessitatibus, provident ratione hic. Assumenda impedit aut dicta.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, incidunt dignissimos eos repudiandae dicta voluptates, dolor corporis accusantium rem veritatis autem aliquam sit ipsa eaque.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, quaerat odit assumenda sit sequi iure laudantium. Praesentium nisi expedita ducimus illo corporis omnis odio saepe</p>
      </div>
    </div>
  )
}

export default About