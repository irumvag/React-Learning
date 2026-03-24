import { createRoot } from "react-dom/client"
import Header from "./Components/header.jsx"
import MainContent from "./Components/MainContent.jsx"
import Footer from "./Components/footer.jsx"
import State from "./Components/State.jsx"
import Count from "./Components/Counter.jsx"
import ComplexArray from "./Components/ComplexArray.jsx"
import FormManipulation from "./Components/FormManipulation.jsx"
import WindowTracker from "./Components/WindowTracker.jsx"

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

