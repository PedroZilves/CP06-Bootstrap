import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartao() {
  return (
    <div className='container'>
      <div className='row mt-2 mb-5'>
        <div className='col-md-4'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="revista.jpg" style={{height:"300px"}} />
            <Card.Body>
              <Card.Title>Revista Cavaleiros do Zodíaco</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="action-figure.jpg" />
            <Card.Body>
              <Card.Title>Action Figure Homem Aranha</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="camiseta.jpg" />
            <Card.Body>
              <Card.Title>Camiseta</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button variant="primary">ir para compra</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4 mt-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="chaveiro.jpg" />
            <Card.Body>
              <Card.Title>Chaveiro do Coringa</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-md-4 mt-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="garrafa.jpg" />
            <Card.Body>
              <Card.Title>Garrafa</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>
      
        <div className='col-md-4 mt-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="kit-miniaturas.jpg" />
            <Card.Body>
              <Card.Title>Kit 8 miniaturas Dragon Ball</Card.Title>
              <Card.Text>
                  
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cartao;