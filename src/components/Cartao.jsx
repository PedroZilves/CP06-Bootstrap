import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartao() {
  return (
    <div className='container'>
      <div className='row mt-2 mb-5 mx-auto'>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="revista.jpg" style={{height:"270px"}} />
            <Card.Body>
              <Card.Title>Revista Cavaleiros do Zodíaco</Card.Title>
              <Card.Text>
                  R$ 50,00
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="action-figure.jpg" style={{height:"270px"}} />
            <Card.Body>
              <Card.Title>Action Figure Homem Aranha</Card.Title>
              <Card.Text>
                  R$ 120,00
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="camiseta.jpg" style={{height:"270px"}} />
            <Card.Body>
              <Card.Title>Camiseta manga curta - The Flash</Card.Title>
              <Card.Text>
                  R$ 69,90
              </Card.Text>
              <Button variant="primary">ir para compra</Button>
            </Card.Body>
          </Card>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="chaveiro.jpg" />
            <Card.Body>
              <Card.Title>Chaveiro do Coringa</Card.Title>
              <Card.Text>
                  R$ 10,00
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="garrafa.jpg" />
            <Card.Body>
              <Card.Title>Garrafa Marvel</Card.Title>
              <Card.Text>
                  R$ 50,00
              </Card.Text>
              <Button variant="primary">Ir para compra</Button>
            </Card.Body>
          </Card>
        </div>
      
        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
          <Card style={{ width: '18rem', height:'440px' }}>
            <Card.Img variant="top" src="kit-miniaturas.jpg" style={{height:"265px"}}/>
            <Card.Body>
              <Card.Title>Kit 8 miniaturas Dragon Ball</Card.Title>
              <Card.Text>
                  R$ 79,90
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