import wildlenstour from "../assets/wildlenstour.png";
import urlshortner from "../assets/urlshortner.png";
import shoppingCart from "../assets/shopping-cart.png";

const projects = [
  {
    title: "Tourism booking Application",
    description:
      "WildLens Tours, a comprehensive platform for discovering and booking wildlife tours globally. This MERN stack application offers a dynamic user experience for planning adventures and robust admin features for managing bookings and tours",
    img: wildlenstour,
    demoUrl: "https://wildlens-tours.netlify.app/",
    frontendRepo: "https://github.com/balamurugan-annadurai/WildLens-Tours-Frontend",
    backendRepo: "https://github.com/balamurugan-annadurai/WildLens-Tours-Backend",
  },
  {
    title: "URL Shortener Application",
    description:
      "A full-stack MERN application for shortening long URLs, with features including user authentication, password recovery, URL management, and a statistics dashboard. Easily create and manage short links with a user-friendly interface.",
    img: urlshortner,
    demoUrl: "https://oneclick-urlshortener.netlify.app/",
    frontendRepo: "https://github.com/balamurugan-annadurai/Urlshotener-Frontend",
    backendRepo: "https://github.com/balamurugan-annadurai/urlshortener-backend",
  },
  {
    title: "React shopping cart",
    description:
      "A dynamic e-commerce platform built with React, enabling users to add and manage products in their cart, view real-time updates, and experience seamless navigation across devices. Offers a sleek design and intuitive shopping interface, real time",
    img: shoppingCart,
    demoUrl: "https://bala-shoppingcart.netlify.app/",
    frontendRepo: "https://github.com/balamurugan-annadurai/Shopping-cart.git",
  },
];

export default projects;
