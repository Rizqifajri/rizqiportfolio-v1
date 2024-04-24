import React from 'react'
import Title from './Title'
import CardProjects from './CardProjects'

const Project = () => {
  return (
    <div className='pt-10'>
      <Title title="Project" subtitle="personal project, team project, etc."/>
      <CardProjects/>
    </div>
  )
}

export default Project
