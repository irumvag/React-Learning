import data from './data.js'
import ExpenseEntryItemList from '../component/ExpenseEntryItemList'
import ExpenseEntryItem from '../component/ExpenseEntryItem.jsx'

function Home() {
   return (
      <>
         <h3>Home</h3>
         <ExpenseEntryItemList items={data} key={20}/>
         <hr />
         <ExpenseEntryItem />
      </>
      )
}
export default Home
