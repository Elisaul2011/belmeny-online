import { useState } from 'react'
import PortadaLubricanteON from '../../../assets/img/portadas/lubricante.png';
import PortadaLubricante from '../../../assets/img/portadas/lubricante.png'

const ListaPrecioLubricanteXLS = () => {

  const [lubricanteImg, setLubricanteImg] = useState(PortadaLubricante);
      const handleImageHover = (brand: string) => {
          switch (brand) {
              case 'lubricante':
                  setLubricanteImg(PortadaLubricante);
                  break;
              case 'lubricante-ON':
                  setLubricanteImg(PortadaLubricanteON);
                  break;
              default:
                  setLubricanteImg(PortadaLubricante);
                  break;
          }
      };

  return (
    <>
      {/* Lubricante (Para pantallas medianas y superiores) */}
      <div className="col-md-3" >
          <a
            className="mx-auto portada"
            onMouseEnter={() => handleImageHover('lubricante-ON')}
            onMouseLeave={() => handleImageHover('lubricante')}>
            <img src={lubricanteImg} className="px-0 rounded mx-auto portada" alt="hover" />
          </a>
      </div>
    </>
  )
}

export default ListaPrecioLubricanteXLS