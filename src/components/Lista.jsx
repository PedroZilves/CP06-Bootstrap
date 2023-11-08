import Accordion from 'react-bootstrap/Accordion';
import Tabela from './Tabela';
import Tabela2 from './Tabela2';

function Lista() {
  return (
    <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Conjunto Harry Potter</Accordion.Header>
        <Accordion.Body>
          <Tabela/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Conjunto Star Wars</Accordion.Header>
        <Accordion.Body>
          <Tabela2/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Conjunto Mario</Accordion.Header>
        <Accordion.Body>
          <Tabela2/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Lista;