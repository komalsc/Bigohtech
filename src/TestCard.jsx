import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const TestCard = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="border-bottom justify-content-center">
          <Col className="pt-3 pb-1 text-center">
            <h6 className="text-uppercase text-muted">Test title</h6>
            <h2 className="mb-0">React Development</h2>
          </Col>
          <Col className="text-muted text-center pb-2 pt-1 mb-4">
            This test will check your web, ES6, and React skills
          </Col>
        </Row>
        <Row className="mt-4 align-items-center justify-content-between">
          <Col className="col-auto">
            <small>
              <span className="text-success">●</span> This test is open
            </small>
          </Col>
          <Col className="col-auto">
            <Button variant="primary">Start test</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TestCard;
