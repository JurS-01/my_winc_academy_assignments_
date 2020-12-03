import React from 'react';
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";
import { v4 as uuidv4 } from 'uuid';


class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: "boerenkool" },
                { id: 2, title: "vegetarische rookworst" },
                { id: 3, title: "vegetarische spekjes" },
                { id: 4, title: "aardappel" },
                { id: 5, title: "rode ui" }
            ],
            shoppingListItems: [
                { id: 6, title: "wortels bio", amount: 3 },
                { id: 7, title: "mosterd", amount: 1 },
                { id: 8, title: "zeezout", amount: 1 },
            ],
            newTitle: "",
        }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.emptyCart = this.emptyCart.bind(this)
        this.addItem = this.addItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addAmountToItem = this.addAmountToItem.bind(this)
    }


    addAmountToItem(clickedTitle) {
        this.setState(() => {
            const updatedItems = this.state.shoppingListItems.map(item => {
                if (item.title === clickedTitle) {
                    item.amount++
                }
                console.log(item);
                return item
            })
            return {
                shoppingListItems: updatedItems
            }
        })
    }




    handleClickGroceryItem(event) {
        this.setState(() => {
            const clickedTitle = event.target.getAttribute("value")
            const movedItem = this.state.groceryItems.find(item => item.title === clickedTitle)
            const updatedGroceryList = this.state.groceryItems.filter(item => item.title !== clickedTitle)
            // updatedShoppingList = [...updatedShoppingList, this.state.groceryItems.find(item => item.title === clickedTitle)]
            let updatedShoppingList = ""
            this.state.shoppingListItems.find(item => {  // Welke array method?
                if (item.title !== clickedTitle) {
                    movedItem.amount = 1
                    console.log(movedItem);
                    return updatedShoppingList = [...this.state.shoppingListItems, movedItem]
                } else {
                    console.log(item);
                    return this.addAmountToItem(item)
                }
            })
            return {
                groceryItems: updatedGroceryList,
                shoppingListItems: updatedShoppingList
            }
        })
    }

    handleChange(event) {
        this.setState({ newTitle: event.target.value });
    }

    addItem(event) {
        event.preventDefault()
        const updatedItem = { id: uuidv4(), title: this.state.newTitle }
        const updatedGroceryList = [...this.state.groceryItems, updatedItem]
        this.setState({ groceryItems: updatedGroceryList });
    }

    emptyCart() {
        this.setState({ shoppingListItems: [] });
    }

    render() {
        return (
            <div className="listcontainer" >
                <GroceryList
                    items={this.state.groceryItems}
                    handleClickGroceryItem={this.handleClickGroceryItem}
                    addItem={this.addItem}
                    handleChange={this.handleChange}
                />
                <ShoppingCart items={this.state.shoppingListItems} emptyCart={this.emptyCart} />
            </div>
        );
    }
}

export default Container