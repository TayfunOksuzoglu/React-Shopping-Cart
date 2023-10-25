# React Shopping Cart

This repository contains a simple shopping cart application built using React. The application allows users to browse through a list of products, add them to the cart, and proceed to checkout. The application has been implemented with features such as adding and removing items from the cart, updating the item count, and calculating the total amount for the items in the cart.

## Features

### Shop Page

The shop page displays a list of available products fetched from the `PRODUCTS` array. Each product is displayed with its image, name, and price. Users can add products to the cart from this page.

### Cart Page

The cart page displays the items that have been added to the cart. Users can view the selected items, remove items, and update the quantity of each item in the cart. The page also provides the total amount of the items in the cart and allows users to continue shopping or proceed to checkout.

### Navbar

The navigation bar provides links to navigate between the shop and the cart pages. It also displays the site name and a shopping cart icon indicating the number of items in the cart.

## Technologies Used

- React
- React Router
- Context API
- PropTypes

## Folder Structure

The project has the following folder structure:

- `src`: Contains the main application code.
  - `assets`: Contains images used in the application.
  - `components`: Contains reusable components like Navbar.
  - `context`: Contains the ShopContext and its provider.
  - `pages`: Contains the main pages of the application, such as Shop and Cart.
