import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderComments() {
        return (
            this.props.selectedDish.comments.map(comment => <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {comment.date}</p>
            </li>)
        )
    }

    render() {
        const { selectedDish } = this.props
        if (selectedDish) {
            return (
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
                            {this.renderComments()}
                        </ul>
                    </div>
                </div>
            );
        } else return <div></div>
    }

}

export default DishDetail;