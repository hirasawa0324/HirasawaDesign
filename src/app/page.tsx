import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Services from "../components/Services"
import Solutions from "../components/Solutions"
import Testimonials from "../components/Testimonials"
import Blog from "../components/Blog"

export default function Home() {
  return (
    <>
        <Hero />
        {/* <Stats /> */}
        <Services />
        <Solutions />
        {/* <Testimonials /> */}
        <Blog />
    </>
  );
}
