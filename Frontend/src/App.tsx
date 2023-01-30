import Routes from './Routes'
import Copyright from './components/Copyright'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="grow h-full">
        <Routes />
      </div>
      <Copyright nameDev={'Yordii'} />
    </div>
  )
}

export default App
