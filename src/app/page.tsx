import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { ScrollAnimationProvider } from "@/components/scroll-animation-provider";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ScrollAnimationProvider>
  );
}