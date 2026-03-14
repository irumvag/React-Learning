import React from 'react'
export default function ComplexArray() {
  const [myFavoriteThings,setMyFavoriteThings] = React.useState([])
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
  "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
  function addFavoriteThing() {
   setMyFavoriteThings((prevFavThing=>[
    ...prevFavThing,
    allFavoriteThings[prevFavThing.length]
   ]))
  }
  
  return (
    <main className="favoriteMain">
      <p>Add your Favorite things</p>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}