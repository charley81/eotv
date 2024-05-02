import Image from 'next/image'

export default function LandingImage() {
  return (
    <Image
      src="https://utfs.io/f/9b216afe-d118-4c3a-9233-511dc1f15f5b-if6yr4.png"
      priority
      alt="man cooking on grill"
      width={600}
      height={600}
    />
  )
}
