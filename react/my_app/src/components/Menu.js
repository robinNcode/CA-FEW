import React, { Component } from 'react';
import {Card, CardTitle, CardBody, CardImg, CardImgOverlay, CardText} from 'reactstrap';


class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish){
    this.setState({selectedDish : dish});
  }

  renderDish(dish){
    if(dish != null){
      return(
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>
              <p>{dish.price}</p>
              <p>{dish.description}</p>
            </CardText>
          </CardBody>
        </Card>
      );
    }
    else {
      return(
        <div></div>
      );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (<div key={dish.id} className="col-12 col-md-5 mt-5">
        <Card onClick={() => this.onDishSelect(dish)}>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle heading1>{dish.name}</CardTitle>
          </CardImgOverlay>
          <CardBody className="ml-5">
            <CardText>
              <p>{dish.price}</p>
              <p>{dish.description}</p>
            </CardText>
          </CardBody>
        </Card>
      </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>

        <div className="row">
            {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;