
import { unstable_cache } from 'next/cache';
import prisma from './prisma';



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
                images:true,
                id:true,
                thumbnail:true,
                name:true // Include images from the related SubTour model
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
  export const checkOutInfo =async(subTourSlug: string)=>  {
      try {
        const subTourInfo = await prisma.subTourInfo.findUnique({
          where: {
            subTourSlug: subTourSlug
          },
          include: {      
            addOns: true,
          }
        });
        return subTourInfo;
      } catch (error) {
        console.error('Database error:', error);
        throw new Error('Failed to fetch tours');
      }
    }


    export async function getRandomSubTours(){
      const randomSubTours = await prisma.$queryRaw`
        WITH RankedSubTours AS (
          SELECT 
            st.*,
            sti."adultPrice",
            t.name as "tourName",
            COALESCE(
              (SELECT AVG(sr.rating)::NUMERIC(10,1) 
               FROM "SubToursRating" sr 
               WHERE sr."subToursId" = st.id),
              0
            ) as average_rating,
            (SELECT COUNT(*) ::INTEGER
             FROM "SubToursRating" sr 
             WHERE sr."subToursId" = st.id
            ) as rating_count,
            ROW_NUMBER() OVER (
              PARTITION BY st."tourSlug" 
              ORDER BY RANDOM()
            ) as rn
          FROM "SubTours" st
          LEFT JOIN "SubTourInfo" sti ON st."slug" = sti."subTourSlug"
          LEFT JOIN "Tours" t ON st."tourSlug" = t.slug
        )
        SELECT 
          id,
          name,
          thumbnail,
          "tourSlug",
          "tourName",
          "adultPrice",
          "slug",
          average_rating,
          rating_count
        FROM RankedSubTours
        WHERE rn = 1
        ORDER BY RANDOM()
        LIMIT 10;
      `
    
      return randomSubTours as RandomSubTour[];
    }
    
    // TypeScript type for the return value
    export type RandomSubTour = {
      id: string
      name: string
      thumbnail: string
      tourSlug: string
      tourName: string
      adultPrice: number | null
      average_rating: number
      rating_count: number
      slug:string
    }














