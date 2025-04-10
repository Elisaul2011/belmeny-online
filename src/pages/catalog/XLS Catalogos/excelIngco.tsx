import { useState } from 'react'

// import AuthUser from '../../components/AuthUser';
// import { getListaPrecioCadenas } from '../../api/requestProductos';
// import {bannerVERT} from '../../assets/img';
import PortadaIngcoON from '../../../assets/img/portadas/portada-ingco-ON.png';
import PortadaIngco from '../../../assets/img/portadas/portada-ingco.png'

// const ExcelJS = require("exceljs")

const ListaPrecioIngcoXLS = () => {

//   const { user } = AuthUser();
//   const ZonasVenta = user.ZonasVenta;
//   const [data, setData] = useState([]);
//   const [enableBtn, setEnableBtn] = useState(true) 

  const [ingcoImg, setIngcoImg] = useState(PortadaIngco);
      const handleImageHover = (brand: string) => {
          switch (brand) {
              case 'ingco':
                  setIngcoImg(PortadaIngco);
                  break;
              case 'ingco-ON':
                  setIngcoImg(PortadaIngcoON);
                  break;
              default:
                  setIngcoImg(PortadaIngco);
                  break;
          }
      };

//   const toDataURL = (url) => {
//     const promise = new Promise((resolve) => {
//       var xhr = new XMLHttpRequest();
//       xhr.onload = function () {
//         var reader = new FileReader();
//         reader.readAsDataURL(xhr.response);
//         reader.onloadend = function () {
//           resolve({ base64Url: reader.result });
//         };
//       };
//       xhr.open("GET", url);
//       xhr.responseType = "blob";
//       xhr.send();
//     });

//     return promise;
//   };

//   const exportExcelFile = async () => {
//     setEnableBtn(false)

//     try{
//     const resProductos = await getListaPrecioCadenas(user.CodVendedor, ZonasVenta, 'VERT');
//     setData(resProductos)
//     const workbook = new ExcelJS.Workbook();
//     const sheet = workbook.addWorksheet("Lista de precios VERT");

//     var response = await fetch(bannerVERT);

//     const encabezadoRow = sheet.getRow(1)

//     encabezadoRow.height = 25
//     encabezadoRow.fill = {
//       type: 'pattern',
//       pattern: 'solid',
//       fgColor: { argb: '0041FF' }
//     }
//     encabezadoRow.font = {
//       name: "Arial",
//       family: 4,
//       size: 14,
//       bold: true,
//       color: { argb: 'FFFFFF' },
//     }

//     sheet.getCell('A2').value="Vendedor"
//     sheet.getCell('B2').value=user.Nombre+" "+user.CodVendedor

//     const buffer = await response.arrayBuffer();
//     const imageId1 = workbook.addImage({
//       buffer: buffer,
//       extension: 'png',
//     });
//     sheet.addImage(imageId1, {
//       tl: { col: 0, row: 2.5 },
//       ext: { width: 1500, height: 130 },
//     });
//     sheet.getRow(2).height = 25
//     sheet.getRow(3).height = 95

//     sheet.columns = [
//       { header: "Codigo", key: "codigo", width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Imagen", key: "imageId2", width: 25, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Nombre", key: "nombre", width: 40, style: { alignment: { vertical: 'middle' } } },
//       { header: "Precio", key: "precio", width: 10, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Existencia", key: "existencia", width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Cantidad Minima", key: "ventaMinima", width: 25, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Cantidad A Comprar", key: "cantidadCompra", width: 25, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Subtotal", key: "subtotal", width: 25, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//       { header: "Codigo de Barras", key: "codigoBarras", width: 25, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
//     ]

//     sheet.columns.forEach(column => {
//       column.alignment = { wrapText: true, vertical: 'middle', horizontal: 'center' };
//     });

//     const promises = resProductos.map(async (product, index) => {
//       const rowNumber = index + 4;

//       // Agregar la fila
//       const row = sheet.addRow({
//         codigo: product.Codigo,
//         rutaImagen: product.RutaImagen,
//         nombre: product.Nombre,
//         precio: product.Precio,
//         existencia: product.Existencia,
//         ventaMinima: product.VentaMinima,
//         cantidadapedir: '',
//         subtotal: '',
//         codigoBarras: product.CodigoBarras
//       });

//       // Aplicar validación a la columna "Cantidad A Comprar" (columna G)
//       sheet.getCell(`G${rowNumber}`).dataValidation = {
//         type: 'whole',
//         operator: 'greaterThanOrEqual',
//         formula1: `=F${rowNumber}`,  // Agrega '=' a la fórmula
//         allowBlank: false,
//         showInputMessage: true,
//         promptTitle: "Entrada requerida",
//         prompt: "Ingrese una cantidad mayor o igual a la cantidad mínima.",
//         showErrorMessage: true,
//         errorTitle: "Valor no válido",
//         error: "La cantidad debe ser mayor o igual a la cantidad mínima especificada.",
//       };

//       sheet.getCell(`D${row.number}`).numFmt = '"$"#,##0.00';
//       sheet.getCell(`H${row.number}`).numFmt = '"$"#,##0.00';

//       sheet.getCell(`H${rowNumber}`).value = { formula: `G${rowNumber}*D${rowNumber}` };

//       sheet.getCell(`G${rowNumber}`).protection = {locked: false}
//       sheet.getCell(`A${rowNumber}`).protection = {locked: false}


//        // Carga de imagen
//        if (product.RutaImagen) {
//         try {
//           const result = await toDataURL(product.RutaImagen);
//           const splitted = product.RutaImagen.split(".");
//           const extName = splitted[splitted.length - 1];

//           const imageId2 = workbook.addImage({
//           base64: result.base64Url,
//           extension: extName,
//         })

//            sheet.addImage(imageId2, {
//           tl: { col: 1, row: rowNumber -1},
//           ext: { width: 120, height: 120 },
//           offsetX: 95,
//         })
//           sheet.getRow(rowNumber).height = 95
//         } catch (error) {
//           console.warn(`No se pudo cargar la imagen para el producto ${product.Codigo}: ${error.message}`);
//         }
//       }
//     });


//       // Espera a que todas las promesas se resuelvan
//       await Promise.all(promises);

//       // Proteger la hoja, bloqueando todas las celdas excepto la columna "Cantidad A Comprar"
//     await sheet.protect('Belmeny2025', { // Contraseña opcional
//       selectLockedCells: false,
//       selectUnlockedCells: true,
//       formatCells: false,
//       formatColumns: false,
//       formatRows: false,
//       insertColumns: false,
//       insertRows: false,
//       insertHyperlinks: false,
//       deleteColumns: false,
//       deleteRows: false,
//       sort: false,
//       autoFilter: false,
//       pivotTables: false
//     });

//     // Guardar el archivo y descargarlo
//     const excelData = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([excelData], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     const url = window.URL.createObjectURL(blob);
//     const anchor = document.createElement("a");
//     anchor.href = url;
//     anchor.download = "Lista de Precio Cadenas VËRT.xlsx";
//     anchor.click();
//     window.URL.revokeObjectURL(url);
//   } catch (error) {
//     console.error("Error al generar el archivo Excel:", error.message);
//     alert(`Hubo un error al generar la lista de precios: ${error.message}`);
//   } finally {
//     setEnableBtn(true);
//   }
// };

  return (
    <>
      {/* INGCO (Para pantallas medianas y superiores) */}
      <div className="col-md-3" >
          <a
            className="mx-auto portada"
            onMouseEnter={() => handleImageHover('ingco-ON')}
            onMouseLeave={() => handleImageHover('ingco')}>
            <img src={ingcoImg} className="px-0 rounded mx-auto portada" alt="hover" />
          </a>
      </div>
    </>
  )
}

export default ListaPrecioIngcoXLS