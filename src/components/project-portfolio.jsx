import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import fariaUser from "../images/faria-image-psd.png";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import React, { useState, useEffect } from "react";

const ProjectPortfolio = () => {
  const [hover, setHover] = useState(false);
  const cardHoverStyle = ({ hover }) => ({
    borderRadius: "10px",
    // boxShadow: hover ? "rgb(255 255 255 / 12%) 8px 4px 11px" : "none",
    width: "300px",
    color: "#0a1929",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    cursor: 'pointer',
    transition: hover? 'all .5s. ease': 'none',
  });
  return (
    <div>
      <div
        style={{
          backgroundColor: "#0a1929",
          fontFamily: "montserrat",
          width: "100%",
          height: "100%",
          color: "#f3f6f9",
          margin: '0 auto',
          paddingBottom: '80px',
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid style={{ padding: "30px 0", margin: "0 auto" }} item xs={12}>
              <div>
                <h2
                  style={{
                    fontSize: "3rem",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {"{ Projects }"}
                </h2>

                <p
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "500",
                    textAlign: "center",
                    lineHeight: "1.5rem",
                  }}
                ></p>
              </div>
            </Grid>
          </Grid>
          <Grid style={{margin: '0 auto'}} container spacing={2}>
            <Grid
              style={{
                margin: "0 auto",
              }}
              item
              xs={4}
            >
              <div
                style={cardHoverStyle({ hover })}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
              >
                <img
                  style={{ height: "150px", borderRadius: "10px", objectFit: 'cover', }}
                  src={project1}
                  alt="faria-profile-image"
                />
                <h3 style={{ padding: "0px 20px" }}>First Project</h3>
                <p style={{ padding: "0px 20px 10px 20px",
            marginTop: '-2%', }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat harum sed debitis. Maiores obcaecati{" "}
                </p>
              </div>
            </Grid>
            <Grid
              style={{
                margin: "0 auto",
              }}
              item
              xs={4}
            >
              <div
                style={cardHoverStyle({ hover })}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
              >
                <img
                  style={{ height: "150px", borderRadius: "10px", objectFit: 'cover',  }}
                  src={project3}
                  alt="faria-profile-image"
                />
                <h3 style={{ padding: "0px 20px" }}>second Project</h3>
                <p style={{ padding: "0px 20px 10px 20px",
            marginTop: '-2%',  }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat harum sed debitis. Maiores obcaecati{" "}
                </p>
              </div>
            </Grid>
            <Grid
              style={{
                margin: "0 auto",
              }}
              item
              xs={4}
            >
              <div
                style={cardHoverStyle({ hover })}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
              >
                <img
                  style={{ height: "150px", borderRadius: "10px", objectFit: 'cover', }}
                  src={project2}
                  alt="faria-profile-image"
                />
                <h3 style={{ padding: "0px 20px" }}>Third Project</h3>
                <p style={{ padding: "0px 20px 10px 20px",
            marginTop: '-2%', }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat harum sed debitis. Maiores obcaecati{" "}
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
