import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Tabela2() {
  return (
    <Table striped bordered hover variant="light" style={{maxWidth:'600px', margin:'0 auto'}}>
      <thead>
        <tr className='text-center'>
          <th>Produto</th>
          <th>Preço</th>
          <th>Comprar</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>Caneca Mario</td>
          <td>R$20,90</td>
          <td>
            <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Action Figure Mario</td>
          <td>R$19,90</td>
          <td>
          <Button variant="primary" >Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Camiseta Mario</td>
          <td>R$39,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Pulseira Mario</td>
          <td>R$18,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela2;