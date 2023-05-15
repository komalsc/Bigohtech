import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function Card3() {
  return (
    <>
    <Card>
      <div className="d-flex">
        <Image src="./Images/Javascript.jpg" className="flex-shrink-0" />
        <Card.Body>
          <Card.Text className='text-start'>
            This is some text within a card body.
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
      <Card>
      <div className="d-flex">
        <Image src="./Images/Javascript.jpg" className="flex-shrink-0" />
        <Card.Body>
          <Card.Text  className='text-start'>
            This is some text within a card body.
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
    </>
  );
}

export default Card3;
