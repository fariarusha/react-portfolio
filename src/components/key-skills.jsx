import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const KeySkills = () => {
  return (
    <div
      style={{
        backgroundColor: "#EEAD0E",
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
          <Grid item xs={4}>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "600",
              }}
            >
              {"{ Key Skills }"}
            </h2>
          </Grid>
          <Grid item xs={8}>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              container
              spacing={2}
            >
              <Grid item xs={3}>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    textAlign: 'left',
                    lineHeight: '0',
                  }}
                >
                  HTML
                </h3>
              </Grid>
              <Grid item xs={9}>
                <LinearProgress
                  variant="determinate"
                  value={90}
                  style={{ color: "#0a1929" }}
                />
              </Grid>
              <Grid item xs={3}>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    lineHeight: '0',
                    textAlign: 'left',
                  }}
                >
                  CSS
                </h3>
              </Grid>
              <Grid item xs={9}>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  style={{ color: "#0a1929" }}
                />
              </Grid>
              <Grid item xs={3}>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    textAlign: 'left',
                    lineHeight: '0',
                  }}
                >
                  Wordpress
                </h3>
              </Grid>
              <Grid item xs={9}>
                <LinearProgress
                  variant="determinate"
                  value={80}
                  style={{ color: "#0a1929" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default KeySkills;
