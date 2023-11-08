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
          <td>Caneca Star Wars</td>
          <td>R$25,90</td>
          <td>
            <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Action Figure Star Wars</td>
          <td>R$12,90</td>
          <td>
          <Button variant="primary" >Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Camiseta Star Wars</td>
          <td>R$37,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr className='text-center'>
          <td>Pulseira Star Wars</td>
          <td>R$13,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela2;