
import './App.css'
import FooterWrapper from './component/footercomponent/FooterWrapper'

import HeaderWrapper from './component/headercomponent/HeaderWrapper'

import MainWrapper from './component/maincomponent/MainWrapper'

function App() {


  return (
    <div className='main'>
      <HeaderWrapper/>
      <MainWrapper/>
      <FooterWrapper/>
    </div>
  )
}

export default App
