import './App.css'
import { Routes, Route } from 'react-router-dom'
import { RoutesConfig } from './routes/Routes'

const App = () => {
  return (
    <div>
     <Routes>
      {RoutesConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
    </div>
  )
}

export default App