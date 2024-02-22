import React from 'react'
import frame from './icons/Frame.svg'
import frame1 from './icons/Frame1.svg'
import frame2 from './icons/Frame2.svg'
import frame3 from './icons/Frame3.svg'
import frame4 from './icons/Frame4.svg'





export const  SidebarData = [
    {
        title: "Discover",
        icon: <img src={frame}/>,
        link: "/discover"
    },
    {
        title: "Meus jogos",
        icon:  <img src={frame1}/>,
        link: "/meusjogos"
    },
    {
        title: "Novos",
        icon:  <img src={frame2}/>,
        link: "/novos"
    },
    {
        title: "Favoritos",
        icon:  <img src={frame3}/>,
        link: "/favoritos"
    },
    {
        title: "Definição",
        icon: <img src={frame4}/>,
        link: "/definição"
    },


]
