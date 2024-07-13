import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../components/footer";
import Loader from "../components/loader";
import Navbar from "../components/navbar";
import NewsLetter from "../components/newsLetter";
const Layout = ({
  children,
  title,
  description,
  keywords,
  author,
  homeFooter,
}) => {
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
      <Loader />
      <main>{children}</main>
      <NewsLetter />
      <Footer homeFooter={homeFooter} />
    </HelmetProvider>
  );
};

export default Layout;
