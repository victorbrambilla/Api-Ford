import { PrismaClient } from "@prisma/client";
import { items } from "./movies";

const prisma = new PrismaClient();

async function Seed() {
  for (const movie of items) {
    await prisma.movies.create({
      data: {
        movie_title: movie.movie_title,
        release_date: movie.release_date,
        genre: movie.genre,
        total_gross: movie.total_gross as number,
        inflation_adjusted_gross: movie.inflation_adjusted_gross as number,
      },
    });
  }
}

Seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
