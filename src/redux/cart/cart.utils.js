export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  console.log(
    cartItems.map((cartItem) =>
      cartItem === cartItemToRemove
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  );
  return cartItems
    .map((cartItem) =>
      cartItem === cartItemToRemove
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    .filter((cartItem) => cartItem.quantity !== 0);
};
