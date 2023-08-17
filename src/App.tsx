import React from 'react'
import Headers from './component/Headers'
import Footer from './component/Footer'
import Landingpage from './component/Landingpage'
import GlobalStyles from './component/GlobalStyles'

const App :React.FC = () => {
  return (
    <div>
      
      <Headers />
      <GlobalStyles />
      <Landingpage />
      <Footer />  
    </div>
  )
}

export default App