import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card1.css';
function Card1() {
  return (
    <Card>
      <Card.Img variant="top"  src="https://profileimagepaleo.s3.amazonaws.com/companycover/669_1669885274521_File%20name" />
      <img class="avatar-img rounded border border-4 border-card" alt="..." src="https://profileimagepaleo.s3.amazonaws.com/companyprofile/669_1669885175528_File%20name"></img>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;
