import { PrismaClient } from '@prisma/client'
import { createRouter } from "./context"

const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true, title: true, description: true, body: true, createdAt: true
})

export const postRouter = createRouter()
  .query('all', {
    async resolve() {
      return prisma.post.findMany({
        select: defaultPostSelect,
      })
    },
  })