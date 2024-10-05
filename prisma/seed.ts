import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const images = [
  { src: "/images/desertSafari.jpg", text: "Desert Safari" },
  { src: "/images/heliride.jpg", text: "Helicopter Ride" },
  { src: "/images/dowCuise.jpg", text: "Dhow Cruise Dinner" },
  { src: "/images/burjKhalifa.jpg", text: "Burj Khalifa Tour" },
  { src: "/images/dubaiCity.jpg", text: "Dubai City Tour" },
  { src: "/images/atlantas.jpg", text: "Atlantis Aquaventure" },
  { src: "/images/hotAir.jpg", text: "Hot Air Balloon Ride" },
  { src: "/images/marinaYacht.jpg", text: "Dubai Marina Yacht Cruise" },
  { src: "/images/garden.jpg", text: "Dubai Miracle Garden" },
  { src: "/images/dubai5.jpg", text: "Dubai Frame Experience" },
  { src: "/images/dubai1.jpg", text: "Ski Dubai Adventure" },
  { src: "/images/dubai2.jpg", text: "Ferrari World Tour" },
];

// Function to generate random numbers in a range
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random highlights, add-ons, and other details
function getRandomDetails() {
  const highlights = [
    'Camel Ride', 'Sandboarding', 'Dune Bashing', 'Quad Bike',
    'Falcon Show', 'Luxury Dinner', 'Helicopter View', 'Museum Visit',
    'City Tour', 'Yacht Cruise'
  ];

  const addOns = [
    { name: 'Quad Bike', price: getRandomNumber(50, 200) },
    { name: 'VIP Lounge', price: getRandomNumber(100, 300) },
    { name: 'Falcon Show', price: getRandomNumber(30, 150) },
    { name: 'Dinner Buffet', price: getRandomNumber(50, 200) },
  ];

  return {
    highlights: highlights.sort(() => 0.5 - Math.random()).slice(0, 3),
    addOns: addOns.sort(() => 0.5 - Math.random()).slice(0, 2),
  };
}

async function main() {
  for (let i = 0; i < 10; i++) {
    const randomImage = images[i % images.length];
    const tourName = randomImage.text;

    const tour = await prisma.tours.create({
      data: {
        name: tourName,
        slug: tourName.toLowerCase().replace(/\s+/g, '-'),
        image: {
          create: {
            src: randomImage.src,
            altText: randomImage.text,
          },
        },
        subTours: {
          create: Array.from({ length: 20 }).map((_, subIndex) => {
            const subTourName = `${tourName} Subtour ${subIndex + 1}`;
            const subTourSlug = `${tourName.toLowerCase().replace(/\s+/g, '-')}-subtour-${subIndex + 1}`;

            const { highlights, addOns } = getRandomDetails();

            return {
              name: subTourName,
              slug: subTourSlug,
              thumbnail: randomImage.src,
              SubTourInfo: {
                create: {
                  description: `Explore the exciting ${subTourName}.`,
                  duration: getRandomNumber(2, 8),
                  time: new Date(),
                  adultPrice: getRandomNumber(150, 500),
                  childPrice: getRandomNumber(100, 300),
                  privatePrice: getRandomNumber(500, 1500),
                  sharedPrice: getRandomNumber(300, 1000),
                  Highlight: {
                    create: highlights.map((highlight) => ({
                      highlight,
                    })),
                  },
                  whatsIncluded: {
                    create: [
                      { included: 'Transport' },
                      { included: 'Meals' },
                    ],
                  },
                  whatToExpect: {
                    create: {
                      expectation: `An unforgettable experience with ${highlights[0]}.`,
                    },
                  },
                  additionalInfo: {
                    create: [
                      { info: 'Wear comfortable clothing.' },
                      { info: 'Bring sunscreen and a camera.' },
                    ],
                  },
                  addOns: {
                    create: addOns,
                  },
                },
              },
              images: {
                create: [
                  {
                    src: randomImage.src,
                    altText: `${subTourName} Image`,
                  },
                ],
              },
              rating: {
                create: [
                  { rating: getRandomNumber(3, 5), comment: 'Awesome experience!' },
                  { rating: getRandomNumber(3, 5), comment: 'A must try.' },
                ],
              },
            };
          }),
        },
      },
    });

    console.log(`Created tour: ${tour.name}`);
  }

  // Seed for Booking Users and Bookings
  const bookingUser = await prisma.bookingUser.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      phone: '+1234567890',
      whatsApp: '+1234567890',
      pickUpPoint: 'Hotel XYZ, Dubai',
      room: '102A',
      email: 'john.doe@example.com',
      booking: {
        create: {
          adults: 2,
          child: 1,
          transportType: 'Private',
          totalPrice: 800,
          addOns: ['Quad Bike', 'VIP Lounge'],
        },
      },
    },
  });

  console.log({ bookingUser });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
