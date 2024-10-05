import { PrismaClient } from '@prisma/client'
import slugify from 'slugify'

const prisma = new PrismaClient()

const tours = [
  { name: "Desert Safari Adventure", image: "/images/desertSafari.jpg" },
  { name: "Helicopter City Views", image: "/images/heliride.jpg" },
  { name: "Dhow Cruise Dinner Experience", image: "/images/dowCuise.jpg" },
  { name: "Burj Khalifa Observation Deck", image: "/images/burjKhalifa.jpg" },
  { name: "Dubai City Tour Deluxe", image: "/images/dubaiCity.jpg" },
  { name: "Atlantis Aquaventure Waterpark", image: "/images/atlantas.jpg" },
  { name: "Hot Air Balloon Desert Ride", image: "/images/hotAir.jpg" },
  { name: "Dubai Marina Luxury Yacht Tour", image: "/images/marinaYacht.jpg" },
  { name: "Dubai Miracle Garden Visit", image: "/images/garden.jpg" },
  { name: "Dubai Frame Spectacular", image: "/images/dubai5.jpg" },
  { name: "Ski Dubai Snow Adventure", image: "/images/dubai1.jpg" },
  { name: "Ferrari World Abu Dhabi Tour", image: "/images/dubai2.jpg" },
]

const allImages = [
  "/images/desertSafari.jpg",
  "/images/heliride.jpg",
  "/images/dowCuise.jpg",
  "/images/burjKhalifa.jpg",
  "/images/dubaiCity.jpg",
  "/images/atlantas.jpg",
  "/images/hotAir.jpg",
  "/images/marinaYacht.jpg",
  "/images/garden.jpg",
  "/images/dubai5.jpg",
  "/images/dubai1.jpg",
  "/images/dubai2.jpg",
]

async function main() {
  // Create tours
  for (const tour of tours) {
    const slug = slugify(tour.name, { lower: true })
    
    const createdTour = await prisma.tours.create({
      data: {
        name: tour.name,
        slug: slug,
        
        image: {
          create: {
            src: tour.image,
            altText: tour.name,
          }
        },
      },
    })

    // Create 12 sub-tours for each tour
    for (let i = 1; i <= 12; i++) {
      const subTourName = `${tour.name} - Package ${i}`
      const subTourSlug = slugify(subTourName, { lower: true })
      
      const subTour = await prisma.subTours.create({
        data: {
          name: subTourName,
          slug: subTourSlug,
          thumbnail: allImages[i % 12], // Cycle through all images
          tourSlug: createdTour.slug,
          images: {
            create: allImages.slice(0, 3).map(img => ({
              src: img,
              altText: `${subTourName} image`,
            })),
          },
          SubTourInfo: {
            create: {
              description: `Experience the incredible ${subTourName}. This package offers an unforgettable adventure in Dubai.`,
              duration: Math.floor(Math.random() * 5) + 2, // 2-6 hours
              time: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
              adultPrice: Math.floor(Math.random() * 500) + 100, // 100-600 AED
              childPrice: Math.floor(Math.random() * 300) + 50, // 50-350 AED
              Highlight: {
                create: [
                  { highlight: "Professional guide" },
                  { highlight: "Hotel pickup and drop-off" },
                  { highlight: "All necessary equipment" },
                ],
              },
              whatsIncluded: {
                create: [
                  { included: "Transport by air-conditioned vehicle" },
                  { included: "Bottled water" },
                  { included: "Insurance" },
                ],
              },
              whatToExpect: {
                create: {
                  expectation: "An amazing adventure with breathtaking views and unforgettable experiences.",
                },
              },
              additionalInfo: {
                create: [
                  { info: "Comfortable walking shoes are recommended" },
                  { info: "Not recommended for participants with heart complaints or other serious medical conditions" },
                ],
              },
              addOns: {
                create: [
                  { name: "VIP upgrade", price: 200 },
                  { name: "Photo package", price: 100 },
                ],
              },
            },
          },
          rating: {
            create: [
              { rating: 4.5, comment: "Excellent experience!" },
              { rating: 5.0, comment: "Would highly recommend!" },
            ],
          },
        },
      })
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
