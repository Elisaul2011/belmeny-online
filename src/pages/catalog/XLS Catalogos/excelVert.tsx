import { useState } from 'react'
import PortadaVertON from '../../../assets/img/portadas/portada-vert-ON.png';
import PortadaVert from '../../../assets/img/portadas/portada-vert.png'

const ListaPrecioVertXLS = () => {

  const [vertImg, setVertImg] = useState(PortadaVert);
      const handleImageHover = (brand: string) => {
          switch (brand) {
              case 'vert':
                  setVertImg(PortadaVert);
                  break;
              case 'vert-ON':
                  setVertImg(PortadaVertON);
                  break;
              default:
                  setVertImg(PortadaVert);
                  break;
          }
      };

  return (
    <>
      {/* Vert (Para pantallas medianas y superiores) */}
      <div className="col-md-3" >
          <a
            className="mx-auto portada"
            onMouseEnter={() => handleImageHover('vert-ON')}
            onMouseLeave={() => handleImageHover('vert')}>
            <img src={vertImg} className="px-0 rounded mx-auto portada" alt="hover" />
          </a>
      </div>
    </>
  )
}

export default ListaPrecioVertXLS