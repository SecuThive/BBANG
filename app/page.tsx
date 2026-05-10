import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Master from '@/components/Master';
import About from '@/components/About';
import Process from '@/components/Process';
import Menu from '@/components/Menu';
import Strengths from '@/components/Strengths';
import Awards from '@/components/Awards';
import Voices from '@/components/Voices';
import Footer from '@/components/Footer';
import FadeReveal from '@/components/FadeReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FadeReveal>
          <Master />
          <About />
          <Process />
          <Menu />
          <Strengths />
          <Awards />
          <Voices />
          {/* <CTA /> 창업 문의 CTA 일시 비공개 */}
        </FadeReveal>
      </main>
      <Footer />
    </>
  );
}
