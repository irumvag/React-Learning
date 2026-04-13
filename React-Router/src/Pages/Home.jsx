import data from './data.js'
import ExpenseEntryItemList from '../component/ExpenseEntryItemList'
import ExpenseEntryItem from '../component/ExpenseEntryItem.jsx'

function Home() {
   return (
      <>
         <h3>Home</h3>
         <ExpenseEntryItemList items={data} key={20}
         header={
            <div><h1>Expense manager</h1></div>
         }
         footer={
            <div style={{ textAlign: "left" }}>
               <p style={{ fontSize: 12 }}>Sample application</p>
            </div>
         } 
         />
         <hr />
         <ExpenseEntryItem />
      </>
      )
}
export default Home
