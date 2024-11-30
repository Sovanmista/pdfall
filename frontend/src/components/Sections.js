import React, { useState } from "react";
import Slider from "react-slick";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Music from "../images/music.jpg";
import Doctor from "../images/doctor.jpg";
import Law from "../images/law.jpg";
import Engineer from "../images/engineering.jpg";
import Stories from "../images/stories.jpg";
import Exam from "../images/exam.jpg";

function Sections() {
  const toprated = [
    {
      title: "Rich Dad Poor Dgtgtad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetjbgg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwhiugihetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwe;joihoihtg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwephohiotg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgweofytdtg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetgogigt Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgwetgggug Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooretgoiugugwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Polkhiugugoretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooiugugugretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Pooogiyguygretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Poorekjgufuygftgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Plkhihiuhooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich Dad Poogiuguigiretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Rich lkhihoihDad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },

    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },

    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },

    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
    {
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },{
      title: "Ricjoiih Dad Pooretgwetg Dad",
      icon: " ",
      description: "lorem Ipsum gu ufuyfu fvcfcfcyfg yivufrcufrbvurcyrv gvb",
    },
  ];

  const [text] = useTypewriter({
    words: [" Anything.", " Anywhere.", " Anytime."],
    loop: true,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = toprated.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(toprated.length / itemsPerPage);

  return (
    <div className="Sections">
      <div className="section-1">
        <div>
          <h1 style={{ paddingTop: 150, color: "white" }} className="roboto-bold">Welcome to pdfall</h1>
        </div>
        <div className="typewrite roboto-bold">
          <h2 style={{ color: "white" }}>
            Access your favourite pdfs <br />
          </h2>
          <h2 style={{ color: "red", marginLeft: 10 }}>
            {text}
            <Cursor cursorColor="red" />
          </h2>
        </div>
        <div className="section-1-btn">
          <button
            style={{
              padding: 10,
              margin: 10,
              cursor: "pointer",
              color: "white",
              backgroundColor: "red",
              borderRadius: 5,
              border: "none",
            }}
          >
            Browse Pdfs
          </button>
          <button
            style={{
              padding: 10,
              margin: 10,
              cursor: "pointer",
              borderRadius: 5,
              borderColor: "red",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="section-2">
        <Slider {...settings}>
          <div className="slides" style={{ margin: 20, padding: 20 }}>
            <div className="slider">
              <h1 className="roboto-regular">Music</h1>
              <img src={Music} alt="" />
              <button>Search</button>
            </div>
          </div>
          <div className="slides">
            <div className="slider">
              <h1 className="roboto-regular">Stories</h1>
              <img src={Stories} alt="" />
              <button>Search</button>
            </div>
          </div>
          <div className="slides">
            <div className="slider">
              <h1 className="roboto-regular">Engineering</h1>
              <img src={Engineer} alt="" />
              <button>Search</button>
            </div>
          </div>
          <div className="slides">
            <div className="slider">
              <h1 className="roboto-regular">Doctor</h1>
              <img src={Doctor} alt="" />
              <button>Search</button>
            </div>
          </div>
          <div className="slides">
            <div className="slider">
              <h1 className="roboto-regular">Entrance Exam</h1>
              <img src={Exam} alt="" />
              <button>Search</button>
            </div>
          </div>
          <div className="slides">
            <div className="slider">
              <h1 className="roboto-regular">Law</h1>
              <img src={Law} alt="" />
              <button>Search</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="section-3">
        <h1 style={{ marginLeft: 40 }}>Featured E-Books</h1>
        <div style={{ margin: "10px 0px 20px 50px", padding: "20px" }}>
          <h3>Top-rated :</h3>
          <div className="fetchitems"
            style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}
          >
            {currentItems.map((item, key) => (
              <div className="toprated" key={key}>
                <h4 className="roboto-medium">{item.title}</h4>
                <img src="" alt="" />
                <p className="roboto-regular">{item.description}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: 150,
              marginRight: 200,
            }}
          >
            <div
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              style={{
                justifyContent: "center",
                textAlign: "center",
                padding: 5,
                backgroundColor: "#dbad6b",
                color: "white",
                borderRadius: "10px 0px 0px 10px",
                cursor: "pointer",
              }}
            >
              Prev
            </div>
            <div>
              <div style={{ display: "flex" }}>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <div
                      onClick={() => paginate(index + 1)}
                      style={{
                        display: "flex",
                        borderRadius: "5px",
                        cursor: "pointer",
                        border: "2px solid black",
                        padding: 5,
                        margin: "0px 10px 0px 10px",
                        height: 20,
                        width: 20,
                        textAlign: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              style={{
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
                padding: 5,
                backgroundColor: "#dbad6b",
                color: "white",
                borderRadius: "0px 10px 10px 0px",
              }}
            >
              Next
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
