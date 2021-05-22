import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailComponent'

class Menu extends Component {
    state = {
        selectedDish: null
    }

    /*renderDish = (selectedDish) => {
        if (selectedDish) {
            return <Card>
                <CardImg width="100%" src={'react-restaurant/' + selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        } else return null
    }*/

    render() {
        const { dishes } = this.props
        const menu = dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.setState({ selectedDish: dish })}>
                        <CardImg width="100%" src={'react-restaurant/' + dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }
        )
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail selectedDish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;