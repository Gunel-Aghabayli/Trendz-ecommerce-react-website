import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Main from "./components/Main/Main.jsx";
import Allshirts from "./components/Main/Allshirts/Allshirts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Company from "./components/Main/Company/Company.jsx";
import Shop from "./components/Main/Shop/Shop.jsx";
import "./App.css";

const App = () => {
  const shirts = [
    {
      id: 1,
      title: "Urban edge men's tee",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315432dea49e372cc4cfb_pr-01-hover-p-500.jpg",
      gender: "men",
      price: "49",
      material: "Cotton",
    },
    {
      id: 2,
      title: "Retro revival t-shirt",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/66331554aeb0ea52494581ea_pr-02-hover-p-500.jpg",
      price: 105,
      gender: "women",
      material: "Cotton",
    },
    {
      id: 3,
      title: "Adventure seeker tee",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6633156ac9e737b98d1d4d20_pr-03.jpg",
      price: 80,
      gender: "men",
      material: "Silk",
    },
    {
      id: 4,
      title: "Classic comfort crewneck",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315906d37ff427395ddd5_pr-04.jpg",
      price: 49,
      gender: "women",
      material: "Cotton",
    },
    {
      id: 5,
      title: "Athletic performance tee",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315aaaeb0ea524945c6b3_pr-05.jpg",
      price: 79,
      gender: "men",
      material: "Polyester",
    },
    {
      id: 6,
      title: "Weekend warrior t-shirt",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315b9bcfcb0aa45519350_pr-06.jpg",
      price: 40,
      gender: "men",
      material: "Poplin",
    },
    {
      id: 7,
      title: "Vintage vibes graphic tee",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/663315f0b40d5879f9b54a31_pr-07.jpg",
      price: 47,
      gender: "men",
      material: "Dobby",
    },
    {
      id: 8,
      title: "Romantic ruffle tee",
      src: "https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/66331619a80d73b98ad9f8d4_pr-08.jpg",
      price: 35,
      gender: "women",
      material: "Linen",
    },
  ];

  return (
    <div>
      <Navbar />
      <Main />
      <Allshirts data={shirts} />
      <Company />
      <Shop />
      <Footer />
      <assets />
    </div>
  );
};

export default App;
