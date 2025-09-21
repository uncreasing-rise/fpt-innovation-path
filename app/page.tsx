import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Partners from './components/Partners';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import Projects from './components/Projects';
import EventsPage from './components/EventsPage';

export default function Home() {
  return (
    <div className="antialiased text-slate-700 bg-white">
      <main>
        <Hero />
        <About />
        <Projects />
        <EventsPage />
        <Team />
        <Partners />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>
  );
}