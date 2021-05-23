import React, { Component } from 'react'
import Header from './HeaderComponent'
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                    {/* <DishDetail selectedDish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;
