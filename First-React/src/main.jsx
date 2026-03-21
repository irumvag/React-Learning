import { createRoot } from "react-dom/client"
import Header from "./header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./footer.jsx"
import State from "./State.jsx"
import Count from "./Counter.jsx"
import ComplexArray from "./ComplexArray.jsx"
import FormManipulation from "./FormManipulation.jsx"
import WindowTracker from "./WindowTracker.jsx"

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
			<hr />
			<FormManipulation />
			<hr />
			<WindowTracker />


        </>
    )
}

