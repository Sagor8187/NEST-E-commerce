import React from 'react'
import Heroabout from '../component/Aobut/Heroabout'
import Provide from '../component/Aobut/Provide'
import Perfomence from '../component/Aobut/Perfomence'
import Team from '../component/Aobut/Team'
import Lastcover from '../component/Aobut/Lastcover'


function About() {
  return (
    <div>
        <Heroabout></Heroabout>
        <Provide></Provide>
        <Perfomence></Perfomence>
        <Team></Team>
        <Lastcover></Lastcover>
    </div>
  )
}

export default About