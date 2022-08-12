-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "movie_title" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "genre" TIMESTAMP(3) NOT NULL,
    "total_gross" INTEGER NOT NULL,
    "inflation_adjusted_gross" INTEGER NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
