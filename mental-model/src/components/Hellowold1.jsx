import React, { useContext } from "react"
import ThemeContext from './ThemeContext'
function HelloWorld1() {
   let theme = useContext(ThemeContext)
   return (
      <div style={{
         color: theme.color,
         backgroundColor: theme.backgroundColor }}>
            Hello World
      </div>
   )
}
export default HelloWorld1