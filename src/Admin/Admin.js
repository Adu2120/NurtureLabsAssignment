import React from 'react'
import './Admin.css'
import MainRoutes from './Components/MainRoutes';
import Navb from './Components/Navb';

export default function Admin() {
  const menuItem = [
    { srno: 1, name: "Home", link: "/Home", class: "bx bx-grid-alt nav_icon", child: [] },
    {
      srno: 2, name: "Section 1", link: "/Section_1", class: "bx bx-bar-chart-square nav_icon", child: [], 
    },
    {
      srno: 3, name: "Section 2", link: "/Section_2", class: "bx bx-candles nav_icon", child: [],
    },
    {
      srno: 4, name: "Section 3", link: "/Section_3", class: "bx bx-chart nav_icon", child: [],
    },
    {
      srno: 5, name: "Section 4", link: "/Section_4", class: "bx bxs-badge-dollar nav_icon", child: [],
    },
    {
      srno: 6, name: "Section", link: "/Section", class: "bx bx-data nav_icon", child: [],
    },
    { srno: 7, name: "Section 6", link: "/Section_6", class: "bx bx-pie-chart-alt nav_icon", child: [] },
    {
      srno: 8, name: "Section 7", link: "/Section_7", class: "bx bx-bar-chart-alt-2 nav_icon", child: [], 
    },
    {
      srno: 9, name: "Section 8", link: "/Section_8", class: "bx bxs-share-alt nav_icon", child: [],
    },
    {
      srno: 10, name: "Documentation", link: "/Documentation", class: "bx bx-file nav_icon", child: [],
    },
  ]


  return (
    <div id='body'>
      <Navb menuItem={menuItem} />
      <MainRoutes />
    </div>
  );
}

