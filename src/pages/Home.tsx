import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { ChatAssistant } from '../components/ChatAssistant'
import { Hero } from '../components/sections/Hero'
import { Services } from '../components/sections/Services'
import { Process } from '../components/sections/Process'
import { Portfolio } from '../components/sections/Portfolio'
import { Skills } from '../components/sections/Skills'
import { Trust } from '../components/sections/Trust'
import { Testimonials } from '../components/sections/Testimonials'
import { Certificates } from '../components/sections/Certificates'
import { Contact } from '../components/sections/Contact'
import { siteConfig } from '../data/siteConfig'

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {siteConfig.sections.services ? <Services /> : null}
        {siteConfig.sections.process ? <Process /> : null}
        {siteConfig.sections.portfolio ? <Portfolio /> : null}
        {siteConfig.sections.skills ? <Skills /> : null}
        {siteConfig.sections.trust ? <Trust /> : null}
        {siteConfig.sections.testimonials ? <Testimonials /> : null}
        {siteConfig.sections.certificates ? <Certificates /> : null}
        {siteConfig.sections.contact ? <Contact /> : null}
      </main>
      <Footer />
      {siteConfig.sections.chat ? <ChatAssistant /> : null}
    </div>
  )
}
