import Navbar from "components/Navbar";
import Base from "components/Hero";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Hero from "components/Hero";
import About from "components/About";
import Experience from "components/Experience";
import Projects from "components/Projects";
import Image from "next/image";
import { motion } from "framer-motion";
import Contact from "components/Contact";
import Footer from "components/Footer";

interface indexProps {
  val: string;
}

const Index: React.FC<indexProps> = ({ val }) => {
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <>
        <Head>
          <meta property="og:title" content="Snigdho Dip Howlader | Software Engineer" />
          <meta
            name="og:description"
            content="This is the personal portfolio of Snigdho Dip Howlader. Frontend Developer, Software Engineer and Computer Science enthusiast. Please find the contact details below if youa re willing to get in touch."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/drnym8nne/image/upload/v1665871812/portfolio/profilepic_xrxbld.jpg"
          />
          <link
            rel="icon"
            href="https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
          />
          <title>Snigdho Dip Howlader</title>
        </Head>
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotateY: 360, scale: 0.2 }}
            transition={{ duration: 1 }}
            className="flex justify-center pt-20"
          >
            <div className="absolute sm:w-[900px] sm:h-[900px] h-96 w-96">
              <Image
                src={
                  "https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
                }
                alt="Not found"
                layout="fill"
              />
            </div>
          </motion.div>
        ) : (
          <>
            <Navbar
              heroRef={heroRef}
              aboutRef={aboutRef}
              expRef={expRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
            <div className="pt-1" ref={heroRef}>
              <Hero />
            </div>
            <div className="pt-1" ref={aboutRef}>
              <About />
            </div>
            <div className="pt-1" ref={expRef}>
              <Experience />
            </div>
            <div className="pt-1" ref={projectsRef}>
              <Projects />
            </div>
            <div className="pt-1" ref={contactRef}>
              <Contact />
            </div>
            <Footer />
          </>
        )}
      </>
    </>
  );
};

export async function getServerSideProps() {
  const value = process.env.BASE_VAL;
  // const var = api(abc)
  return { props: { val: value } };
}

export default Index;
