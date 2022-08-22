import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vote : ""
        }
    }

    increament = () => {
        this.setState({
            vote : this.state.vote + "❤️"
        })
    }

    render() {
        return(
            
            <Card style={{ width: '18rem' }} className="beascard">
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} onClick={this.increament}/>
              <Card.Text className="desc">
              {this.props.description}
              </Card.Text>
              <Card.Text className="vote">
              Votes
              </Card.Text>
              <Card.Text>
              {this.state.vote}
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default HornedBeast;