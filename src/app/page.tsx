import Hero from '@/components/Hero';
import About from '@/components/About';
import CallToAction from '@/components/CallToAction';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CallToAction />
      <ContactModal />
    </main>
  );
}
