import React, { Component } from 'react'
import Header from './HeaderComponent'
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent'
import Footer from './FooterComponent'

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
                <Header />
                <Menu
                    dishes={this.state.dishes}
                    onClick={this.onDishSelect} />
                <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        )
    }
}

export default Main;
