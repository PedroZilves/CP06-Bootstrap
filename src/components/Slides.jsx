import Carousel from 'react-bootstrap/Carousel';

function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className='d-block w-100'
            src="./treco1.png"
            alt="Primeiro slide"
            style={{ maxHeight: '600', width: '480' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco2.png"
        alt="segundo slide"
        style={{ maxHeight: '300px', width: 'auto' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco3.png"
        alt="Terceiro slide"
        style={{ maxHeight: '600', width: '480' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco4.png"
        alt="Quarto slide"
        style={{ maxHeight: '300px', width: 'auto' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco5.png"
        alt="Cinco slide"
        style={{ maxHeight: '300px', width: 'auto' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco6.png"
        alt="Sexto slide"
        style={{ maxHeight: '300px', width: 'auto' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco7.png"
        alt="Setimo slide"
        style={{ maxHeight: '300px', width: 'auto' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='d-block w-100'
        src="./treco8.png"
        alt="Oito slide"
        style={{ maxHeight: '300px', width: 'auto' }} // Adicione estilos personalizados para ajustar o tamanho
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;