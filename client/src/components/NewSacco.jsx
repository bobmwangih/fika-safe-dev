import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
// core components
import UserHeader from 'components/Headers/UserHeader.jsx';

class NewSacco extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      website: '',
      date_founded: '',
      name: '',
      address: '',
      registration_number: '',
      password: '',
      telephone_number: '',
      email: '',
      postal_code: 1323131,
    };
  }

  // handler functions
  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };
  handleSubmit = () => {
    const data = this.state;
    // invoke the saveData with the new data
    this.saveData(data);
  };

  saveData = data => {
    fetch(`/api/saccos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const { history } = this.props;
        //history.push(`/admin/index`);
      })
      .catch(err => {
        console.log(err);
        alert('unable to save the data');
      });
  };

  render() {
    // destructuring states
    const {
      description,
      website,
      date_founded,
      name,
      address,
      registration_number,
      password,
      telephone_number,
      email,
      postal_code,
    } = this.state;
    return (
      <div style={{ marginTop: '160px' }}>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Sacco information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Sacco Name
                            </label>
                            <Input
                              value={name}
                              onChange={this.handleOnChange}
                              name="name"
                              className="form-control-alternative"
                              placeholder="Sacco Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email address
                            </label>
                            <Input
                              value={email}
                              onChange={this.handleOnChange}
                              name="email"
                              className="form-control-alternative"
                              placeholder="Enter email"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Registration Number
                            </label>
                            <Input
                              value={registration_number}
                              onChange={this.handleOnChange}
                              name="registration_number"
                              className="form-control-alternative"
                              placeholder="Registration Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Year Founded
                            </label>
                            <Input
                              value={date_founded}
                              onChange={this.handleOnChange}
                              name="date_founded"
                              className="form-control-alternative"
                              placeholder="Year founded"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Location
                            </label>
                            <Input
                              value={address}
                              onChange={this.handleOnChange}
                              name="address"
                              className="form-control-alternative"
                              placeholder="Enter Location"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Phone
                            </label>
                            <Input
                              value={telephone_number}
                              onChange={this.handleOnChange}
                              name="telephone_number"
                              className="form-control-alternative"
                              placeholder="Enter Phone Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Postal Code
                            </label>
                            <Input
                              value={postal_code}
                              name="postal_code"
                              onChange={this.handleOnChange}
                              className="form-control-alternative"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Website link
                            </label>
                            <Input
                              value={website}
                              name="website"
                              onChange={this.handleOnChange}
                              className="form-control-alternative"
                              placeholder="eg http://www.sacconame.gmail.com"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Create Password
                            </label>
                            <Input
                              name="password1"
                              className="form-control-alternative"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Confirm Password
                            </label>
                            <Input
                              value={password}
                              onChange={this.handleOnChange}
                              className="form-control-alternative"
                              name="password"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label>Description</label>
                        <Input
                          value={description}
                          onChange={this.handleOnChange}
                          name="description"
                          className="form-control-alternative"
                          placeholder="A few words about you..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <Button
                        color="info"
                        href="#pablo"
                        onClick={this.handleSubmit}
                      >
                        Save
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewSacco;
