import { PrismaClient } from '@prisma/client';
import { unstable_cache } from 'next/cache';

const prisma = new PrismaClient();


export const getAllTours = unstable_cache(async () => {
  try {
    const tours = await prisma.tours.findMany({
        include:{
            image:true,
            _count: {
                select: {
                    subTours: true
                    
                }
            }
        },
    });
    return tours;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch tours');
  }
},
['tours'],
{
    tags: ['tours'], 
}
);

export const getAllSubTours = (page: string ="1", slug: string) =>
  unstable_cache(
    async () => {
      try {
        // Use Promise.all() to run both queries in parallel
        const [totalCount, subTours,ratingStats] = await Promise.all([
          // Total count query
          prisma.subTours.count({
            where: {
              tourSlug: slug,  // Count all tours matching the slug
            },
          }),
          
          // Paginated query for subTours data
          prisma.subTours.findMany({
            where: {
              tourSlug: slug,
            },
            include: {
              SubTourInfo:true,
              
            },
            
            skip: (+page - 1) * 5,  // Pagination logic: skip previous pages
            take: 5,  // Fetch 1 record per page (adjust as needed)
          }),


            prisma.subToursRating.aggregate({
            _avg: {
              rating: true, // Average rating
            },
            _count: {
              rating: true, 
            },
            where: {
              SubTours: {
                tourSlug: slug,
              },
            },
          }),
        ]);
        

        // Return both the paginated subTours and total count
        return {
          subTours,
          totalCount,
          ratingStats
        };
      } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch sub tours');
      }
    },
    [`getAllSubTours_${page}_${slug}`],
    {
      tags:["subTours"],
    } // Cache key depending on page and slug
  );




  export const subTourRatingsCount =(slug:string)=> 
    unstable_cache(
      async () => {
        try {
          const subToursRating = await prisma.subToursRating.aggregate({
            _avg: {
              rating: true,
            },
            _count: {
              rating: true,
            },
            where: {
              SubTours: {
                slug: slug,
              },
            },
          });
          return subToursRating;
        } catch (error) {
          console.error('Database error:', error);
          throw new Error('Failed to fetch tours');
        }
      },
      
      [`subTourRatings-${slug}`], // Dynamic cache key
      {
        tags: [`subTourRatings-${slug}`], // Optional: use a tag per slug for finer cache control
      }
    
    );
  

  export const SubTourInfo =(slug: string)=> unstable_cache(
    async () => {
      try {
        const subTourInfo = await prisma.subTourInfo.findUnique({
          where: {
            subTourSlug: slug
          },
          include: {      
            Highlight: true,     
            whatsIncluded: true,
            whatToExpect: true,
            additionalInfo: true,
            addOns: true,
            subTour: {
              select: {
                images:true // Include images from the related SubTour model
              }
            }
          }
        });
        return subTourInfo;
      } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch tours');
      }
    },
    [`subTourInfo_${slug}`], // Dynamic cache key
    {
      tags: ['subTourInfo'], 
    }
  );



  // async function filterSubTours({
  //   minPrice,
  //   maxPrice,
  //   minRating,
  //   startTime,
  //   endTime,
  //   tourSlug,
  // }: {
  //   minPrice?: number;
  //   maxPrice?: number;
  //   minRating?: number;
  //   startTime?: Date;
  //   endTime?: Date;
  //   tourSlug: string; // Optional, filter by tour if needed
  // }) {
  //   const subtours = await prisma.subTours.findMany({
  //     where: {
  //       AND: [
  //         {
  //           tourSlug: tourSlug,
  //         },
  //         minPrice !== undefined || maxPrice !== undefined
  //           ? {
  //               SubTourInfo: {
  //                 price: {
  //                   gte: minPrice,
  //                   lte: maxPrice,
  //                 },
  //               },
  //             }
  //           : {},
  //         minRating !== undefined
  //           ? {
  //               rating: {
  //                 some: {
  //                   rating: {
  //                     gte: minRating,
  //                   },
  //                 },
  //               },
  //             }
  //           : {},
  //         startTime !== undefined || endTime !== undefined
  //           ? {
  //               SubTourInfo: {
  //                 time: {
  //                   gte: startTime,
  //                   lte: endTime,
  //                 },
  //               },
  //             }
  //           : {},
  //       ],
  //     },
  //     include: {
  //       SubTourInfo: true,
  //       rating: true,
  //     },
  //   });
  
  //   return subtours;
  // }
  
  // export const subtoursfilter = filterSubTours({
  //   minPrice: 0,
  //   maxPrice: 150,
  //   minRating: 4.5,
  //   // startTime: new Date('2024-01-01'),
  //   // endTime: new Date('2024-12-31'),
  //   tourSlug: "ski-dubai-snow-adventure",
  // });
  
  
  

