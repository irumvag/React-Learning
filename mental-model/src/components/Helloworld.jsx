import React, { useContext } from "react"
import ThemeContext from './ThemeContext'
function HelloWorld() {
   let { theme, setTheme } = useContext(ThemeContext)
   return (<div style={{
      color: theme.color,
      backgroundColor: theme.backgroundColor }}>
   <div>
      <select value={theme.backgroundColor}
         onChange= {
            (e) => {
               setTheme({
                  ...theme,
                  backgroundColor: e.target.value
               })
            }
         } >
         <option value="green">Green</option>
         <option value="red">Red</option>
      </select>
   </div>
      <div>Hello World</div>
   </div>)
}
export default HelloWorld