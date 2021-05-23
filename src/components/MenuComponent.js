import React, { useState } from 'react'
import DishDetail from './DishDetailComponent'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderMenuItem = ({ dish, onClick }) => {
    return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card onClick={() => onClick(dish)}>
                <CardImg width="100%" src={'react-restaurant/' + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

const Menu = ({ dishes }) => {
    const [selectedDish, setSelectedDish] = useState(null)

    const onClick = (selectedDish) => {
        setSelectedDish(selectedDish)
    }

    const menu = dishes.map(dish => <RenderMenuItem dish={dish} onClick={onClick} />)
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <DishDetail selectedDish={selectedDish} />
        </div>
    );
}

export default Menu;
