// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Array of image data to be used
  const tourImages = [
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

  // Create Tours and associate Tour Images
  const tour1 = await prisma.tours.create({
    data: {
      name: 'Adventure Tours',
      image: {
        create: {
          src: tourImages[0].src,
          altText: tourImages[0].text,
        },
      },
      subTours: {
        create: [
          {
            name: 'Desert Safari Adventure',
            images: {
              create: [
                {
                  src: tourImages[0].src,
                  altText: tourImages[0].text,
                },
                {
                  src: tourImages[1].src,
                  altText: tourImages[1].text,
                },
              ],
            },
          },
          {
            name: 'Helicopter Ride Experience',
            images: {
              create: [
                {
                  src: tourImages[2].src,
                  altText: tourImages[2].text,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const tour2 = await prisma.tours.create({
    data: {
      name: 'City Tours',
      image: {
        create: {
          src: tourImages[3].src,
          altText: tourImages[3].text,
        },
      },
      subTours: {
        create: [
          {
            name: 'Burj Khalifa Tour',
            images: {
              create: [
                {
                  src: tourImages[3].src,
                  altText: tourImages[3].text,
                },
                {
                  src: tourImages[4].src,
                  altText: tourImages[4].text,
                },
              ],
            },
          },
          {
            name: 'Atlantis Aquaventure',
            images: {
              create: [
                {
                  src: tourImages[5].src,
                  altText: tourImages[5].text,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const tour3 = await prisma.tours.create({
    data: {
      name: 'Unique Experiences',
      image: {
        create: {
          src: tourImages[6].src,
          altText: tourImages[6].text,
        },
      },
      subTours: {
        create: [
          {
            name: 'Hot Air Balloon Ride',
            images: {
              create: [
                {
                  src: tourImages[6].src,
                  altText: tourImages[6].text,
                },
              ],
            },
          },
          {
            name: 'Dubai Marina Yacht Cruise',
            images: {
              create: [
                {
                  src: tourImages[7].src,
                  altText: tourImages[7].text,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const tour4 = await prisma.tours.create({
    data: {
      name: 'Family Fun',
      image: {
        create: {
          src: tourImages[8].src,
          altText: tourImages[8].text,
        },
      },
      subTours: {
        create: [
          {
            name: 'Dubai Miracle Garden',
            images: {
              create: [
                {
                  src: tourImages[8].src,
                  altText: tourImages[8].text,
                },
              ],
            },
          },
          {
            name: 'Dubai Frame Experience',
            images: {
              create: [
                {
                  src: tourImages[9].src,
                  altText: tourImages[9].text,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const tour5 = await prisma.tours.create({
    data: {
      name: 'Adventure Thrills',
      image: {
        create: {
          src: tourImages[10].src,
          altText: tourImages[10].text,
        },
      },
      subTours: {
        create: [
          {
            name: 'Ski Dubai Adventure',
            images: {
              create: [
                {
                  src: tourImages[10].src,
                  altText: tourImages[10].text,
                },
              ],
            },
          },
          {
            name: 'Ferrari World Tour',
            images: {
              create: [
                {
                  src: tourImages[11].src,
                  altText: tourImages[11].text,
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log({ tour1, tour2, tour3, tour4, tour5 });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
