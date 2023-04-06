import Login from "../components/Login";
import Home from "../routes/Home";
import Contactos from "../routes/Contactos";
import Dentista from "../routes/Dentista";
import Destacados from "../routes/Destacados";



export const routes = [
    {
        id:1,
        path: "/home",
        Component: Home,
    },
    {
        id:2,
        path: "/users/:id",
        Component: Dentista,
    },
    {
        id:3,
        path: "/destacados/",
        Component: Destacados,
    },
    /* {
        id:4,
        path: "/contactos/",
        Component: Contactos,
    } */
];

export { Login };