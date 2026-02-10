import { createElement } from "react"
import { createRoot } from "react-dom/client"
//import { Fragment } from "react"
import Header from "./header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./footer.jsx"

const root = createRoot(document.getElementById("root"))
/* const reactElement=createElement("h1", null, "Hello from createElement!")
const reactelm=<h1>hello Gad</h1>
console.log(reactElement)
root.render(
	reactelm
) 
function MainContent(){
	return (
		<h1>React is great!</h1>
	)
}*/

root.render(
	<Page />
)
function Page() {
    return (
        <> 
            <Header />
			<MainContent />
			<Footer />
        </>
    )
}

