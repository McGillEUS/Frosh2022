import { useTheme } from "@emotion/react";
import { Typography, Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import { WHAT_IS_FROSH } from "../../constants/home";
import Header from "../../images/header.png";
import Prep101 from "../../images/sponsor/prep101.png";
import Altos from "../../images/sponsor/altos.png";
import Chef from "../../images/sponsor/Chef.png";
import Gerts from "../../images/sponsor/Gerts.PNG";
import LegalClinic from "../../images/sponsor/legal.png";
import Videographer from "../../images/sponsor/videographer.png";
import Cafe from "../../images/sponsor/cafecampus.png";
import UberEats from "../../images/sponsor/UberEatsLogo.png";
import RBC from "../../images/sponsor/RBC.png";
import LaCite from "../../images/sponsor/la_cite.jpg";
import Malak from "../../images/sponsor/Malak.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const HEADER_HEIGHT = "max(460px, 45vw)";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const theme = useTheme();
  const [showAllSponsors, setShowAllSponsors] = useState(false);

  const handleViewAllClick = () => {
    setShowAllSponsors(!showAllSponsors);
  };

  const sponsorData = [
    { src: Prep101},
    { src: Altos, link: "https://altorestaurant.ca/en/" },
    { src: Chef, link: "https://www.chefoncalldelivery.com/" },
    { src: Gerts, link: "https://www.gertscampusbar.ca/" },
    {src: LegalClinic},
    {src: Cafe, link: "https://www.cafecampus.com/"},
    {src: RBC, link: "https://www.rbcroyalbank.com/dms/students/oncampus/index.html"},
    {src: LaCite, link: "https://www.bgoliving.com/residential/lacite"},
    {src: Malak, link: "https://www.instagram.com/malakaltawouk.ca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
    {src: Videographer, link: "https://jfilmzproductions.com/"},
    {src: UberEats},
  ];

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "20px",
  };

  const whiteBoxStyle = {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "20px",
    display: "contain",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    maxWidth: "250px",
    height: "150px",
  };

  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          textAlign: "center",
          zIndex: -1,
          width: "100%",
          height: HEADER_HEIGHT,
          paddingLeft: "auto",
          paddingRight: "auto",
        }}
      >
        <img
          alt="Frosh Banner"
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
          src={Header}
        />
      </div>
      <div
        style={{
          zIndex: 1,
          backgroundColor: theme.background,
          borderRadius: "5px 5px 0 0",
          boxShadow: `0px 20px 60px 90px ${theme.background}`,
          marginTop: HEADER_HEIGHT,
        }}
      >
        <div style={{ padding: "10px 50px 50px 50px" }}>
          <Typography variant="h2">What is Frosh?</Typography>
          <Typography variant="p">{WHAT_IS_FROSH}</Typography>
        </div>
        <div
          style={{
            width: "90%",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            height: "fit-content",
          }}
        >
          <Typography variant="h2">Frosh Trailer 2025</Typography>
          <iframe
            title="Frosh Trailer 2025"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/aJa9L87LvJw"
            style={{ border: 0, display: 'block' }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Typography variant="h2">Sponsors</Typography>
          {showAllSponsors ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              {sponsorData.map((sponsor, index) => (
                <div key={index} style={whiteBoxStyle}>
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.src} alt={`Sponsor ${index + 1}`} style={imageStyle} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <Carousel
              swipeable={true}
              responsive={responsive}
              showDots={false}
              centerMode={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              infinite={true}
              keyBoardControl={true}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {sponsorData.map((sponsor, index) => (
                <div key={index} style={whiteBoxStyle}>
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.src} alt={`Carousel ${index + 1}`} style={imageStyle} />
                  </a>
                </div>
              ))}
            </Carousel>
          )}
          <div style={{ textAlign: "center", marginTop: "20px", color: theme.palette.text.primary }}>
            <Button variant="contained" color="primary" onClick={handleViewAllClick}>
              {showAllSponsors ? "Show Less" : "View All"}
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
