import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Tabela() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Produto</th>
          <th>Preço</th>
          <th>Comprar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>R$22,90</td>
          <td>
            <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>R$15,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>R$11,90</td>
          <td>
          <Button variant="primary">Ir para compra</Button>

          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tabela;