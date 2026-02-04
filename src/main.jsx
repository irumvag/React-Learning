import { createElement } from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
/* const reactElement=createElement("h1", null, "Hello from createElement!")
const reactelm=<h1>hello Gad</h1>
console.log(reactElement)
root.render(
	reactelm
) */
// function MyAwesomeNavbar() {
//     return (
//         <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">MyAwesomeNavbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarsExample03">
//                     <ul className="navbar-nav me-auto mb-2 mb-sm-0">
//                         <li className="nav-item">
//                             <a className="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Link</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
//                             <ul className="dropdown-menu">
//                                 <li><a className="dropdown-item" href="#">Action</a></li>
//                                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                     <form role="search">
//                         <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     )
// }
// function MainContent(){
// 	return (
// 		<h1>React is great!</h1>
// 	)
// }

root.render(
    <div>
        <img src="src/assets/react.svg" alt="" width='40px' height='40px' />
		<h1>Fun Facts about React</h1>
		<ul>
			<li>Was first released in 2013</li>
			<li>Was originally created by Jordan Walke</li>
			<li>Has well over 100k stars on Github</li>
			<li>Is maintained by Meta</li>
			<li>Powers thousands of Entriprse app, including mobile apps</li>
		</ul>
    </div>
)
