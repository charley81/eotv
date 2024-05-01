import { Button } from '../button'

export default function LandingInfo() {
  return (
    <div className="sm:text-center md:mt-10 xl:mt-0">
      <h1 className="text-4xl font-black">Events of The Villages</h1>
      <p className="text-base text-muted-foreground leading-8 mt-4">
        Your go-to neighborhood event app, seamlessly connecting locals with
        everything from block parties to backyard fires.
      </p>
      <Button className="w-full mt-16 lg:mt-8">Get Started</Button>
    </div>
  )
}
