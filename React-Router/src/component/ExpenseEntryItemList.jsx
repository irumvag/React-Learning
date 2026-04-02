import React from 'react';
//import ExpenseEntryItem from './ExpenseEntryItem.jsx'
class ExpenseEntryItemList extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      const lists = this.props.items.map( (item) => 
         <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
         </tr>
      );
      return (
         <>
         <table>
            <h1>This is the expense Item details</h1>
            <thead>
               <tr>
                  <th>Item</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Category</th>
               </tr>
            </thead>
            <tbody>
               {lists}
            </tbody>
         </table>
         </>
      );
   }
}
export default ExpenseEntryItemList;