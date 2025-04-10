import { useState } from 'react'
import PortadaWadfowON from '../../../assets/img/portadas/portada-wadfow-ON.png';
import PortadaWadfow from '../../../assets/img/portadas/portada-wadfow.png'

const ListaPrecioWadfowXLS = () => {

  const [wadfowImg, setWadfowImg] = useState(PortadaWadfow);
      const handleImageHover = (brand: string) => {
          switch (brand) {
              case 'wadfow':
                  setWadfowImg(PortadaWadfow);
                  break;
              case 'wadfow-ON':
                  setWadfowImg(PortadaWadfowON);
                  break;
              default:
                  setWadfowImg(PortadaWadfow);
                  break;
          }
      };

  return (
    <>
      {/* Wadfow (Para pantallas medianas y superiores) */}
      <div className="col-md-3" >
          <a
            className="mx-auto portada"
            onMouseEnter={() => handleImageHover('wadfow-ON')}
            onMouseLeave={() => handleImageHover('wadfow')}>
            <img src={wadfowImg} className="px-0 rounded mx-auto portada" alt="hover" />
          </a>
      </div>
    </>
  )
}

export default ListaPrecioWadfowXLS