import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import background from "./images/Background.png";
import Typewriter from "typewriter-effect";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import fariaUser from "../images/faria-image-psd.png";

const HeaderSection = () => {
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
        <Grid
          style={{
            padding: "100px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          container
          spacing={2}
        >
          <Grid item xs={6}>
            <div>
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                }}
              >
                Hello, I am
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("Faria")

                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Tabassum")
                      .start();
                  }}
                />
              </h1>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img
                style={{ height: "450px" }}
                src={fariaUser}
                alt="faria-profile-image"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeaderSection;
