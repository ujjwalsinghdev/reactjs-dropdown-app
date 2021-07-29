import React from "react"
import "./App.css"
import SearchBar from "./Components/SearchBar"
import CountryData from "./CountryData.json"

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Country Name..." data={CountryData} />
    </div>
  )
}

export default App
