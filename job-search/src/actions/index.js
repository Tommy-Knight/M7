// here I write my action creators
// functions that return actions

export const addToFavourites = (job) => {
  return {
    type: 'ADD_TO_FAVOURITES',
    payload: job,
  }
}

// export const addItemToCartAction = (book) => ({
//   type: 'ADD_ITEM_TO_CART',
//   payload: book,
// })

// export const removeItemFromCartAction = (index) => ({
//   type: 'REMOVE_ITEM_FROM_CART',
//   payload: index,
// })

// ({
// })
// is for returning an object out of your arrow function

// export const setUsernameAction = (name) => ({
//   type: 'SET_USERNAME',
//   payload: name,
// })