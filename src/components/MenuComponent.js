import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Loading } from './LoadingComponent';

const RenderMenuItem = ({ dish }) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={'react-restaurant' + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </div>
    )
}

const Menu = ({ dishes }) => {

    const menu = dishes.dishes.map(dish => <RenderMenuItem key={dish.id} dish={dish} />)

    if (dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}

export default Menu;
