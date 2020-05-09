import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class Dishdetail extends Component {

    renderComments(dish){
        if(dish!==undefined){
            return(
            dish.comments.map(com=> {
    return (
        <li key={com.id}><p>{com.comment}</p>
            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</p></li>
    )

}
)
    )}
    return <div></div>}

    renderDish(dish) {
        if (dish !== undefined) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div></div>
    }
    render() {
        return (
            <div className={"container"}>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <ul className="list-unstyled">
                        {this.renderComments(this.props.dish)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;