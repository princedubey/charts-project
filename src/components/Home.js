import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';

const Home = ({ data }) => {
  return (
    <Container className="mt-4 text-center">
      <Row>
        <Col md={9}>
          <Card>
            <Card.Body>
              <LineChartComponent data={data} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <PieChartComponent data={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
