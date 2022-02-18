import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const AboutMe = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a1929",
        fontFamily: "montserrat",
        width: "100%",
        height: "100%",
        color: "#f3f6f9",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid style={{ padding: "70px 0", margin: '0 auto', }} item xs={9}>
            <div>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {"{ About Me }"}
              </h2>

              <p
                style={{
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: "500",
                  textAlign: "center",
                  lineHeight: '1.5rem',
                  
                }}
              >
                <span style={{ color: "#EEAD0E" }}>Hello there!</span> I am
                Faria Tabassum and right now you are seeing my portfolio.I am a
                noob react developer and working everyday to improve my skills.
                Besides coding I like to stay at home. I hate crowds and I love
                binge watching netflix. Cheers!
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMe;
