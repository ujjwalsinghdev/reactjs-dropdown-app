//PARENT COMPONENT FROM WHERE DATA WILL BE SEND TO CHILD COMPONENT
import React, { useState } from "react"

import Dropdown from "./Dropdown"
import options from "./countries.json"

const App = () => {
  //value state for option selection
  const [value, setValue] = useState(null)

  return (
    <div style={{ width: 200 }}>
      <Dropdown options={options} prompt="select countries.." value={value} onchange={(val) => setValue(val)}></Dropdown>
    </div>
  )
}

export default App
