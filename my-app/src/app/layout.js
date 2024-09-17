"use client";
import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";
import { Raleway } from "next/font/google";
import useHideNav from "../../hooks/useHider";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";

const ralway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const showNav = useHideNav();

  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={ralway.className}>
          <Container>
            {showNav && <NavBar />}
            {children}
          </Container>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
