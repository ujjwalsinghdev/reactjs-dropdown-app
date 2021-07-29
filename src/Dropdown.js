//CUSTOM DROPDOWN
import React, { useState, useRef, useEffect } from "react"
import "./styles.css"

const Dropdown = ({ options, prompt, value, onchange }) => {
  //to manage dropdown state
  const [open, setOpen] = useState(false)

  //use to focus on input when app renders
  const ref = useRef(null)

  //to addevent with cleanup function
  useEffect(() => {
    document.addEventListener("click", close)
    return () => document.removeEventListener("click", close)
  }, [])

  //for setting current state when user select specific state
  const close = (e) => {
    // console.dir([e.target, ref.current])
    setOpen(e && e.target === ref.current)
  }

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value" ref={ref}>
          {value ? value.name : prompt}
        </div>
        <div className={`arrow ${open ? "open" : null}`}></div>

        <div className={`options ${open ? "open" : null}`}>
          {options.map((option, index) => {
            return (
              <div key={index} className={`option ${value === option ? "selected" : null}`} onClick={() => onchange(option)}>
                {option.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
