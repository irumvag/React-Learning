import { createElement } from "react"
import { createRoot } from "react-dom/client"
//import { Fragment } from "react"
import Header from "./header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./footer.jsx"
import State from "./State.jsx"
import Count from "./Counter.jsx"
import ComplexArray from "./ComplexArray.jsx"

const root = createRoot(document.getElementById("root"))
root.render(
	<Page />
)
function Page() {
    return (
        <> 
            <Header />
			<MainContent />
			<Footer />
			<hr />
			<State />
			<hr />
			<Count />
			<hr />
			<ComplexArray />
			<hr />
			<Count />

        </>
    )
}

