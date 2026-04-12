import React from 'react';
//import ExpenseEntryItem from './ExpenseEntryItem.jsx'
class ExpenseEntryItemList extends React.Component {
   constructor(props) {
      super(props);
      this.state={

      }
   }
   componentDidMount() {
      console.log("ExpenseEntryItemList :: Initialize :: componentDidMount :: Component mounted");
   }
   shouldComponentUpdate(nextProps, nextState) {
      console.log("ExpenseEntryItemList :: Update :: shouldComponentUpdate invoked :: Before update");
      return true;
   }
   static getDerivedStateFromProps(props, state) {
      console.log("ExpenseEntryItemList :: Initialize / Update :: getDerivedStateFromProps :: Before update");
      return null;
   }
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("ExpenseEntryItemList :: Update :: getSnapshotBeforeUpdate :: Before update");
      return null;
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("ExpenseEntryItemList :: Update :: componentDidUpdate :: Component updated");
   }
   componentWillUnmount() {
      console.log("ExpenseEntryItemList :: Remove :: componentWillUnmount :: Component unmounted");
   }
   handleMouseEnter(e){
      e.target.parentNode.classList.add("highlight");
   }
   handleMouseLeave(e){
      e.target.parentNode.classList.remove('highlight');
   }
   handleMouseOver(e){
      console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
   }
   render() {
      const lists = this.props.items.map( (item) => 
         <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{new Date(item.spendDate).toDateString()}</td>
            <td>{item.category}</td>
         </tr>
      );
      return (
         <>
         <h1>This is the expense Item details</h1>
         <table onMouseOver={this.handleMouseOver}>
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