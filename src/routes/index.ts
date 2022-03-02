import { db } from '$lib/database'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
  await db.read()
  const { programs } = db.data
  return {
    body: {
      programs
    }
  }
}
