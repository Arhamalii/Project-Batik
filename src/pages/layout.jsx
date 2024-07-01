import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NewsLetter from "../components/newsLetter";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <NewsLetter />
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
