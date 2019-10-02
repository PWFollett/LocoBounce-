import React, { Component } from "react";
import API from "../util/API";
//import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";

class City extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    console.log("componentDidMount")
    this.loadCity();
  }

  loadCity = () => {
      console.log("load city")
    API.getCities()
      .then(res => this.setState({ cities: res.data }))
      .catch(err => console.log("error" + err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.cities.length ? (
              <List>
                {this.state.cities.map(city => (
                  <ListItem key={city._id}>
                    <a href={"/cities/" + city._id}>
                      <strong>
                        {city.name}
                      </strong>
                    </a>
                    {/* <DeleteBtn /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default City;
