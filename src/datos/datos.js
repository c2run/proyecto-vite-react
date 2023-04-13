
const categorias = [{
    id:1,
    nombre: 'Frutas'
},
{
    id:2,
    nombre: 'Verduras'
}
];

const productos = [{
    id:1,
    categorias_id: 1,
    nombre: 'Manzana',
    precio: 1000
},
{
    id:2,
    categorias_id: 1,
    nombre: 'Uvas',
    precio: 123
},
{
    id:3,
    categorias_id: 1,
    nombre: 'Duraznos',
    precio: 245
},
{
    id:4,
    categorias_id: 2,
    nombre: 'Papas',
    precio: 790
},
{
    id:5,
    categorias_id: 2,
    nombre: 'Lechuga',
    precio: 1200
},
{
    id:6,
    categorias_id: 2,
    nombre: 'Repollo',
    precio: 1800
},
{
    id:7,
    categorias_id: 2,
    nombre: 'Pimentón',
    precio: 840
},
{
    id:8,
    categorias_id: 2,
    nombre: 'Limón',
    precio: 1120
},
{
    id:9,
    categorias_id: 2,
    nombre: 'Repollo',
    precio: 345
}
];

const paises = [
    {
      id: 1,
      nombre: "Chile",
      dominio: "cl",
    },
    {
      id: 2,
      nombre: "Perú",
      dominio: "pe",
    },
    {
      id: 3,
      nombre: "Bolivia",
      dominio: "bo",
    },
    {
      id: 4,
      nombre: "Argentina",
      dominio: "ar",
    },
    {
      id: 5,
      nombre: "Venezuela",
      dominio: "vl",
    },
    {
      id: 6,
      nombre: "Colombia",
      dominio: "co",
    },
    {
      id: 7,
      nombre: "Panamá",
      dominio: "pn",
    },
    {
      id: 8,
      nombre: "Brasil",
      dominio: "br",
    },
    {
      id: 9,
      nombre: "Paraguay",
      dominio: "pr",
    },
    {
      id: 10,
      nombre: "Uruguay",
      dominio: "ur",
    },
  ];

  const categorias_productos = [
    {
    id:1,
    nombre: 'Abarrotes'
    },
    {
      id:2,
      nombre: 'Lácteos'
    },
    {
      id:3,
      nombre: 'Carnes'
    },
    {
      id:4,
      nombre: 'Licores'
    },
    {
      id:5,
      nombre: 'Perfumería'
    }
];

  const atributos = [
    {
      id:1,
      nombre: 'Perecible',
    },
    {
      id:2,
      nombre: 'Armable'
    },
    {
      id:3,
      nombre: 'Frágil'
    },
    {
      id:4,
      nombre: 'Multiuso',
    },
    {
      id:5,
      nombre: 'Edición Limitada'
    }
  ];

export { productos }
export {categorias }
export { paises }
export {categorias_productos}
export {atributos}