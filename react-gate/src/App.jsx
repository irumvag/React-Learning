import { useState } from 'react'
import './App.css'
import ProductList from './component/listProducts'

function App() {
 

  return (
    <>
      <ProductList />
    </>
  )
}

export default App

/*
Complete this component that renders a list of products. 
Add a search input that filters the list in real time as the user types (case insensitive).
The component should still filter the products whether the user filter by the product_name or it’s description .
The UI is already handled just focus on the logic and codes related to filtering.
*/
