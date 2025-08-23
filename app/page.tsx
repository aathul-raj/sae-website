import HeroSection from '@/app/components/HeroSection'
import MissionSection from '@/app/components/MissionSection'
import TeamsPreview from '@/app/components/TeamsPreview'
import Footer from '@/app/components/Footer'
import WhyJoin from './components/WhyJoin'
import Toast from './components/Toast'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <TeamsPreview />
      <WhyJoin/>
      <Footer />
      <Toast />
    </main>
  )
}