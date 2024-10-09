import React from "react"
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel"
import { getRandomSubTours } from "@/lib/db"
import Link from "next/link"
import TopTours from "./TopTours"
export const dynamic = "force-dynamic"

const TopTourWrapper = async () => {
  const topTours = await getRandomSubTours()

  return (
    <EmblaCarousel options={{ loop: false }}>
      {topTours.map(
        ({ name, thumbnail, adultPrice, id, tourSlug, average_rating, rating_count, slug }) => (
          <Link href={`/packages/${tourSlug}/${slug}`} key={id}>
            <TopTours
              src={thumbnail}
              title={name}
              price={adultPrice || 0}
              rating={average_rating}
              totalRatings={rating_count}
            />
          </Link>
        )
      )}
    </EmblaCarousel>
  )
}

export default TopTourWrapper
