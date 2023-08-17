import React from 'react'
import GetStarted from './GetStarted'
import Designlanguage from './Designlanguage'
import Resources from './Resources'
import { CoreValues } from './CoreValues'
import { Hero } from './Hero'

const Landingpage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CoreValues />
      <GetStarted />
      <Designlanguage />
      <Resources />
    </div>
  )
}

export default Landingpage