import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();

// Dummy data for images
const images = [
  { src: '/images/desertSafari.jpg', text: 'Desert Safari' },
  { src: '/images/heliride.jpg', text: 'Helicopter Ride' },
  { src: '/images/dowCuise.jpg', text: 'Dhow Cruise Dinner' },
  { src: '/images/burjKhalifa.jpg', text: 'Burj Khalifa Tour' },
  { src: '/images/dubaiCity.jpg', text: 'Dubai City Tour' },
  { src: '/images/atlantas.jpg', text: 'Atlantis Aquaventure' },
  { src: '/images/hotAir.jpg', text: 'Hot Air Balloon Ride' },
  { src: '/images/marinaYacht.jpg', text: 'Dubai Marina Yacht Cruise' },
  { src: '/images/garden.jpg', text: 'Dubai Miracle Garden' },
  { src: '/images/dubai5.jpg', text: 'Dubai Frame Experience' },
  { src: '/images/dubai1.jpg', text: 'Ski Dubai Adventure' },
  { src: '/images/dubai2.jpg', text: 'Ferrari World Tour' },
];

// Seed function
async function main() {
  // Create tours
  const tours = await Promise.all(
    images.map(async (image) => {
      const tour = await prisma.tours.create({
        data: {
          name: image.text,
          slug: slugify(image.text, { lower: true }), // Using slugify to generate slug
          image: {
            create: {
              src: image.src,
              altText: `${image.text} Image`,
            },
          },
        },
      });

      // Create sub-tours for each tour
      const subTours = await Promise.all(
        Array.from({ length: 3 }).map(async (_, index) => {
          const subTourName = `${image.text} Sub-Tour ${index + 1}`;
          return prisma.subTours.create({
            data: {
              slug: slugify(subTourName, { lower: true }), // Using slugify for sub-tour slug
              tourSlug: tour.slug,
              
              images: {
                create: [
                  {
                    src: image.src,
                    altText: `${subTourName} Image`,
                  },
                ],
              },
              SubTourInfo: {
                create: {
                  description: `${subTourName} is an amazing experience.`,
                  price:100,
                  duration: 120,
                  time: new Date(),
                  Highlight: {
                    create: [
                      { highlight: 'Highlight 1' },
                      { highlight: 'Highlight 2' },
                    ],
                  },
                  whatsIncluded: {
                    create: [
                      { included: 'Transportation' },
                      { included: 'Meals' },
                    ],
                  },
                  whatToExpect: {
                    create: {
                      expectation: 'Expect a great adventure!',
                    },
                  },
                  additionalInfo: {
                    create: [
                      { info: 'Bring your camera.' },
                      { info: 'Wear comfortable shoes.' },
                    ],
                  },
                  addOns: {
                    create: [
                      { name: 'Extra Tour Guide', price: 50 },
                      { name: 'Photography Package', price: 100 },
                    ],
                  },
                },
              },
            },
          });
        })
      );

      return { tour, subTours };
    })
  );

  console.log('Tours and sub-tours created:', tours);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
