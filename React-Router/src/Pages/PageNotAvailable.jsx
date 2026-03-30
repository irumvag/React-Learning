import { Link } from "react-router-dom"
function PageNotAvailable() {
   return (
      <p>The page is not available. Please <Link to=
      "/">click here</Link> to go to home page.</p>
   )
}
export default PageNotAvailable