import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  renderComments(dish) {
    var d1 = new Date();
    if (dish != null) {

      const reply = dish.comments.map((comment) => {
        //var date = new Date(comment.date);
        return (
          <ListGroup key={comment.id} className="mt-2">
            <ListGroupItem>{comment.comment}</ListGroupItem>
            <ListGroupItem>
              -- {comment.author},  {new Intl.DateTimeFormat('en-US',
              {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              }
            ).format(new Date(Date.parse(comment.date)))}
            </ListGroupItem>
          </ListGroup>
        );
      });

      return (
        <div className="col-12 col-md-5">
          <h4>Comments</h4>
          {reply}
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }

  }

  render() {
    return (
      <div className="row mt-2">
        <div className="col-12 col-md-5">
          {this.renderDish(this.props.dish)}
        </div>
        {this.renderComments(this.props.dish)}
      </div>
    );
  }
}

export default Dishdetail;