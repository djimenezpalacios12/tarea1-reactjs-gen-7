import { DirectionsCar, DesktopMac, LocalHospital } from "@material-ui/icons";

const DATA = [
  {
    id: 1,
    nombre: "Proyecto 1",
    jefeProyecto: "Enzo Paez",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate lectus ac velit feugiat, in molestie ipsum feugiat. Nunc et blandit tortor. Fusce pellentesque, est nec maximus condimentum, sem libero imperdiet augue, ac facilisis lorem odio vitae lacus. Mauris ac nunc molestie, porttitor dui id, mattis risus. Etiam est metus, egestas quis congue id, aliquam nec libero. Ut massa neque, iaculis a sapien sit amet, eleifend tincidunt diam. Nullam ullamcorper mauris ut eros cursus efficitur. Sed at imperdiet tortor, et tempor leo. Aliquam pharetra ornare eros sed tincidunt. Nunc porta massa non ultrices aliquam. Donec auctor augue tortor, a mollis magna vulputate in. Mauris in suscipit mi. Sed justo magna, convallis at magna sit amet, efficitur viverra erat. Maecenas non mauris at turpis porta convallis ac at erat.",
    area: "Transporte",
    icon: <DirectionsCar />,
    cumplidos: 20,
    objetivos: [
      {
        id: 11,
        objetivo: "Objetivo11",
        estado: "completado",
      },
      {
        id: 12,
        objetivo: "Objetivo12",
        estado: "completado",
      },
    ],
  },
  {
    id: 2,
    nombre: "Proyecto 2",
    jefeProyecto: "Felix Alba",
    descripcion:
      "Phasellus placerat tortor enim, a facilisis felis eleifend et. Curabitur ac feugiat tortor. Sed mi erat, feugiat ut nulla id, iaculis malesuada sem. Integer in sapien vitae mauris gravida vulputate. Duis viverra sed metus in eleifend. Nulla facilisi. Pellentesque vel ultricies neque. Suspendisse posuere odio ut feugiat molestie. Donec aliquam, lectus aliquam pharetra luctus, libero magna elementum eros, eu tempor ligula tellus at diam. Proin pharetra enim vitae velit vulputate, et scelerisque sapien aliquet. Phasellus semper metus et convallis volutpat. Proin id tortor ante",
    area: "Tecnología",
    icon: <DesktopMac />,
    cumplidos: 10,
    objetivos: [
      {
        id: 21,
        objetivo: "Objetivo21",
        estado: "Completado",
      },
      {
        id: 22,
        objetivo: "Objetivo22",
        estado: "No Completado",
      },
    ],
  },
  {
    id: 3,
    nombre: "Proyecto 3",
    jefeProyecto: "Florencia Caamaño",
    descripcion:
      "Nulla ac nibh lorem. Suspendisse blandit a nulla at ullamcorper. Curabitur pulvinar sit amet tortor sit amet egestas. Nullam blandit nibh elit, ac convallis nisi dictum at. Donec scelerisque convallis condimentum. Proin mollis, orci at sodales fermentum, lorem orci accumsan tortor, ut ultrices dolor lorem in est. Pellentesque volutpat elementum feugiat. Nam dolor neque, efficitur quis metus ut, rhoncus lacinia lacus. Morbi ut congue leo. Praesent elementum est fermentum risus ornare, eu mollis sapien interdum. Ut rhoncus massa at diam euismod lobortis. Pellentesque lobortis cursus convallis",
    area: "Medicina",
    icon: <LocalHospital />,
    cumplidos: 0,
    objetivos: [
      {
        id: 31,
        objetivo: "Objetivo31",
        estado: "No Completado",
      },
      {
        id: 32,
        objetivo: "Objetivo32",
        estado: "No Completado",
      },
    ],
  },
];

export default DATA;
