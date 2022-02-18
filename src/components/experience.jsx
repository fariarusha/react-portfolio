import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import augnitiveLogo from "../images/logo-black.svg";
import devsnetLogo from "../images/logo.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Experience = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#fff",
          fontFamily: "montserrat",
          width: "100%",
          height: "100%",
          color: "#0a1929",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
      >
        <Container>
          <Grid style={{ padding: "30px 0", margin: "0 auto" }} item xs={12}>
            <div>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {"{ Experience }"}
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
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  {" "}
                  <img
                    style={{
                      height: "40px",
                    }}
                    src={augnitiveLogo}
                    alt="augnitiveLogo"
                  />
                  <p style={{ fontSize: "1rem", lineHeight: "1rem" }}>
                    2018-2019
                  </p>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      lineHeight: "0",
                    }}
                  >
                    Front End Developer
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  {" "}
                  <img
                    style={{
                      height: "40px",
                    }}
                    src={devsnetLogo}
                    alt="devsnetLogo"
                  />
                  <p style={{ fontSize: "1rem", lineHeight: "1rem" }}>
                    2019-Present
                  </p>
                  <p
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      lineHeight: "0",
                    }}
                  >
                    Front End Developer
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
