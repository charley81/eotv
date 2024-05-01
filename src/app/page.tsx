import LandingPageHeader from '@/components/ui/landing/landing-header'
import LandingImage from '@/components/ui/landing/landing-image'
import LandingInfo from '@/components/ui/landing/landing-info'
import Image from 'next/image'

export default async function LandingPage() {
  return (
    <div className="overflow-hidden">
      <LandingPageHeader />
      <section className="px-4 pt-44 max-w-3xl mx-auto  md:pt-20 xl:pt-52 xl:overflow-hidden xl:flex xl:items-center xl:max-w-7xl xl:gap-20">
        <LandingImage />
        <LandingInfo />
      </section>
    </div>
  )
}
