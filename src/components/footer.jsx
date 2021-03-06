import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import background from "./images/Background.png";
import Typewriter from "typewriter-effect";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import fariaUser from "../images/faria-image-psd.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
import Link from '@mui/material/Link';

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#0a1929",
        fontFamily: "montserrat",
        width: "100%",
        height: "70px",
        color: "#f3f6f9",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            width: "70px",
          }}
        >
         <Link target="_blank" href="https://www.instagram.com/ft.rusha/"> 
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_12_32)">
                <path
                  d="M12.2362 23.9999C12.1567 23.9999 12.0773 23.9999 11.9973 23.9996C10.116 24.0041 8.37781 23.9564 6.68738 23.8534C5.13757 23.7591 3.7229 23.2236 2.59607 22.3047C1.50879 21.4181 0.766296 20.2194 0.389282 18.7421C0.0611573 17.4559 0.0437622 16.1934 0.0270996 14.9723C0.0150146 14.0961 0.00256348 13.0579 0 12.0021C0.00256348 10.9419 0.0150146 9.90374 0.0270996 9.02758C0.0437622 7.80663 0.0611573 6.54412 0.389282 5.25781C0.766296 3.78051 1.50879 2.58172 2.59607 1.69512C3.7229 0.7763 5.13757 0.240716 6.68756 0.146417C8.37799 0.0436949 10.1166 -0.00427876 12.0018 0.000298881C13.8836 -0.00372944 15.6213 0.0436949 17.3117 0.146417C18.8615 0.240716 20.2762 0.7763 21.403 1.69512C22.4905 2.58172 23.2328 3.78051 23.6098 5.25781C23.9379 6.54394 23.9553 7.80663 23.972 9.02758C23.9841 9.90374 23.9967 10.9419 23.9991 11.9977V12.0021C23.9967 13.0579 23.9841 14.0961 23.972 14.9723C23.9553 16.1932 23.9381 17.4557 23.6098 18.7421C23.2328 20.2194 22.4905 21.4181 21.403 22.3047C20.2762 23.2236 18.8615 23.7591 17.3117 23.8534C15.6929 23.952 14.0299 23.9999 12.2362 23.9999ZM11.9973 22.1246C13.8479 22.129 15.5471 22.0823 17.1978 21.9819C18.3697 21.9107 19.3857 21.5304 20.2181 20.8516C20.9875 20.2241 21.5175 19.3584 21.793 18.2784C22.0662 17.2078 22.082 16.0583 22.0972 14.9466C22.1091 14.0763 22.1215 13.0455 22.1241 11.9999C22.1215 10.9542 22.1091 9.92352 22.0972 9.05322C22.082 7.94158 22.0662 6.79205 21.793 5.72125C21.5175 4.64129 20.9875 3.77557 20.2181 3.14806C19.3857 2.46948 18.3697 2.08917 17.1978 2.01794C15.5471 1.91741 13.8479 1.87109 12.0016 1.87512C10.1514 1.87072 8.45197 1.91741 6.80127 2.01794C5.62939 2.08917 4.61334 2.46948 3.78094 3.14806C3.01154 3.77557 2.48163 4.64129 2.20605 5.72125C1.93286 6.79205 1.91711 7.9414 1.90192 9.05322C1.89001 9.92425 1.87756 10.9557 1.875 12.0021C1.87756 13.044 1.89001 14.0756 1.90192 14.9466C1.91711 16.0583 1.93286 17.2078 2.20605 18.2784C2.48163 19.3584 3.01154 20.2241 3.78094 20.8516C4.61334 21.5302 5.62939 21.9105 6.80127 21.9817C8.45197 22.0823 10.1517 22.1291 11.9973 22.1246ZM11.9526 17.8593C8.72186 17.8593 6.0932 15.2308 6.0932 11.9999C6.0932 8.76904 8.72186 6.14056 11.9526 6.14056C15.1835 6.14056 17.812 8.76904 17.812 11.9999C17.812 15.2308 15.1835 17.8593 11.9526 17.8593ZM11.9526 8.01556C9.75568 8.01556 7.9682 9.80303 7.9682 11.9999C7.9682 14.1968 9.75568 15.9843 11.9526 15.9843C14.1497 15.9843 15.937 14.1968 15.937 11.9999C15.937 9.80303 14.1497 8.01556 11.9526 8.01556ZM18.4682 4.26556C17.6917 4.26556 17.062 4.89507 17.062 5.67181C17.062 6.44854 17.6917 7.07806 18.4682 7.07806C19.2449 7.07806 19.8745 6.44854 19.8745 5.67181C19.8745 4.89507 19.2449 4.26556 18.4682 4.26556Z"
                  fill="#8E8E8E"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_32">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link target="_blank" href="https://www.facebook.com/faria.tabassum.rusha/">              
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8584 24V13.0533H17.5313L18.0824 8.78588H13.8584V6.06176C13.8584 4.82664 14.2 3.98492 15.9732 3.98492L18.231 3.98399V0.167076C17.8406 0.116334 16.5002 0 14.9403 0C11.6827 0 9.45258 1.98836 9.45258 5.63912V8.78588H5.76855V13.0533H9.45258V24H13.8584Z"
                fill="#8E8E8E"
              />
            </svg>
          </Link>
         
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
