// COMPONENTS
import Container from './components/container/Container'
import Content from './components/content/Content'
import Header from './components/header/Header'
import HotelView from './components/hotel-view/HotelView'
import Navigation from './components/navigation/Navigation'
// STYLE
import './styles.scss'

function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Content>
          <Navigation />
          <HotelView />
        </Content>
      </Container>
    </div>
  )
}

export default App
