import Navbar from './components/Navbar'
import Main from './components/Main'
import CreatePassword from './components/CreatePassword'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import ExpenseEntryItemList from './components/ExpenseEntryItemList'
import Helloword from './components/Helloworld'
import ThemeContext from './components/ThemeContext'
import HelloWorld1 from './components/Hellowold1'
import { useState } from 'react'
import RefInput from './components/RefInput'
import TodoList from './components/TodoList'
import TodoReducerList from './components/TodoReducerList'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const store= createStore(rootReducer)

export default function(){
    let initialValue={
            color:"white",
            backgroundColor:'green'
        }
    let [theme, setTheme]= useState(initialValue)
    return (
        <>
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
            </nav>
            <Routes>
                <Route path='/' element={ <Provider store={store}>
                    <ExpenseEntryItemList />
                </Provider>}/>
                <Route path='/about' element={<TodoList/>}/>
            </Routes>
        </Router>

        <div style={{ padding: "5px"}}>
            <TodoReducerList />
        </div>
        <CreatePassword />
        <Navbar />
        <Main />
        <ThemeContext.Provider value={{theme,setTheme}}>
            <Helloword/>
        </ThemeContext.Provider>
        <HelloWorld1 />
        <RefInput />
        </>
    )
}