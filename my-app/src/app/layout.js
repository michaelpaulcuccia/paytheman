import StyledComponentsRegistry from "../../lib/registry";
import "./globals.css";
import { Raleway } from "next/font/google";
import Container from "../../components/Container";

const ralway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={ralway.className}>
          <Container>{children}</Container>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
