import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent'

class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = (dishId) => {
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="contoainer">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu
                    dishes={this.state.dishes}
                    onClick={this.onDishSelect} />
                <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
            </div>
        )
    }
}

export default Main;
