import Navbar from './components/Navbar'
import Main from './components/Main'
import CreatePassword from './components/CreatePassword'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import ExpenseEntryItemList from './components/ExpenseEntryItemList'
import Helloword from './components/Helloworld'
import ThemeContext from './components/ThemeContext'

const store= createStore(rootReducer)

export default function(){
    return (
        <>
        <Provider store={store}>
            <ExpenseEntryItemList />
        </Provider>
        <CreatePassword />
        <Navbar />
        <Main />
        <ThemeContext.Provider value={{
            color:"white",
            backgroundColor:'green'
        }}>
        <Helloword/>
        </ThemeContext.Provider>
        </>
    )
}