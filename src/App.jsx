import { HomePage } from "./components/HomePage"
import { LocationPage } from "./components/LocationPage"
import { LocationContextProvider } from "./contexts/LocationContext"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <LocationContextProvider>
      <Router>
        <Routes>
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/location-page" element={<LocationPage />} />
          <Route path="*" element={<Navigate to="/home-page" />} />
        </Routes>
      </Router>
    </LocationContextProvider>
    
  )
}

export default App