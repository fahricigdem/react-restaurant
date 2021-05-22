import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const DishDetail = ({ selectedDish }) => {

    const renderComments = () => {
        return selectedDish.comments.map(comment => <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
        </li>)
    }

    if (selectedDish) {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={'react-restaurant/' + selectedDish.image} alt={selectedDish.name} />
                            <CardBody>
                                <CardTitle>{selectedDish.name}</CardTitle>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {renderComments()}
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else return <div></div>
}

export default DishDetail;