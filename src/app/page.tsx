import { Button } from '@/components/ui/button'
import { db } from '@/server/db/index'

export default async function Home() {
  const posts = await db.query.posts.findMany()
  console.log(posts)
  return (
    <main className="p-16">
      <h1 className="text-4xl">Start Here</h1>
      <Button>Submit</Button>
    </main>
  )
}
