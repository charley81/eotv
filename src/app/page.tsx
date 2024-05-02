import LandingPageHeader from '@/components/landing/landing-header'
import LandingImage from '@/components/landing/landing-image'
import LandingInfo from '@/components/landing/landing-info'
import Image from 'next/image'

export default async function LandingPage() {
  return (
    <>
      <LandingPageHeader />
      <section className="px-4 pt-44 max-w-3xl mx-auto  md:pt-20 xl:pt-52 xl:overflow-hidden xl:flex xl:items-center xl:max-w-7xl xl:gap-20">
        {/* image */}
        <div className="hidden md:block mx-auto">
          <LandingImage />
        </div>

        {/* text */}
        <div className="sm:text-center md:mt-10 xl:mt-0 xl:max-w-xl">
          <LandingInfo />
        </div>
      </section>
    </>
  )
}
