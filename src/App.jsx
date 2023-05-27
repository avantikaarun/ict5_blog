import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useForm } from 'react-hook-form';
import Form from './Form.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

export default function App() {
  const { register, handleSubmit } = useForm();
  const [blog, setBlog] = useState([]);

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const jsonData = await data.json();
    setBlog(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="# add blog">Addblog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Form>
          
        </Form>
        <br />

        <Row>
          <br />
          <h1 className="text-center mb-3">BLOGS</h1>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://raisingsimple.com/wp-content/uploads/2019/11/anita-austvika-zEKvzPonptU-unsplash-400x600.jpg"
            />
            <Card.Body>
              <Card.Title>15 THINGS YOU NEED TO HEAR FOR A SIMPLE HOLIDAY</Card.Title>
              <Button variant="primary">VISIT</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://raisingsimple.com/wp-content/uploads/2019/10/IMG_0039-400x600.jpg"
            />
            <Card.Body>
              <Card.Title>MOVING A HOUSE</Card.Title>
              <Button variant="primary">VISIT</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://raisingsimple.com/wp-content/uploads/2019/04/sofy-m-halftoneco-1388841-unsplash-400x600.jpg"
            />
            <Card.Body>
              <Card.Title>IT'S BACKED BY SCIENCE.LET CLUTTER GO</Card.Title>
              <Button variant="primary">VISIT</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://raisingsimple.com/wp-content/uploads/2020/09/mb1-2-400x600.jpg"
            />
            <Card.Body>
              <Card.Title>MODERN MASTER BATHROOM</Card.Title>
              <Button variant="primary">VISIT</Button>
            </Card.Body>
          </Card>
          
          
        </Row>
      </Container>
    </div>
  );
}
