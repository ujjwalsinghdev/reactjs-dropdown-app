import React, { useState } from "react"
import "./SearchBar.css"
import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  const handleFilter = (e) => {
    //user input
    const searchWord = e.target.value
    //filter logic

    setWordEntered(searchWord)

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon></SearchIcon> : <CloseIcon id="clearBtn" onClick={clearInput}></CloseIcon>}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            const { name, code } = value
            return (
              <p>
                {code} : {name}
              </p>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
