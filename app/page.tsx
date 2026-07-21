import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import AboutBlock from '@/components/AboutBlock/AboutBlock';
import Pricing from '@/components/Pricing/Pricing';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <AboutBlock />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}