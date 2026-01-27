import './App.css'
import { Routes, Route } from 'react-router-dom'
import { RoutesConfig } from './routes/Routes'
import MainLayout from './layout/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {RoutesConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
