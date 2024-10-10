
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

export const getAllSubTours = (
  page: string = "1",
  slug: string,
  filters: {
    duration?: number;
    minPrice?: number;
    maxPrice?: number;
  } = {}
) =>
  unstable_cache(
    async () => {
      try {
        // Build the where clause based on filters
        const whereClause: any = {
          tourSlug: slug,
          AND: [],
        };

        // Add duration filter if provided
        if (filters.duration) {
          whereClause.AND.push({
            SubTourInfo: {
              duration: {
                ...(filters.duration === 1 && { lte: 1 }),
                ...(filters.duration === 2 && { gt: 1, lte: 3 }),
                ...(filters.duration === 6 && { gt: 3, lte: 6 }),
                ...(filters.duration === 24 && { gt: 6, lte: 24 }),
                ...(filters.duration === 26 && { gt: 24 }),
              },
            },
          });
        }

        // Add price filter if provided
        if ((filters.minPrice !== undefined || filters.maxPrice !== undefined )&& filters.maxPrice !== 0) {
          whereClause.AND.push({
            SubTourInfo: {
              adultPrice: {
                gte: filters.minPrice || 0,
                lte: filters.maxPrice || Number.MAX_SAFE_INTEGER,
              },
            },
          });
        }

        

        // If no filters are applied, remove the empty AND array
        if (whereClause.AND.length === 0) {
          delete whereClause.AND;
        }

        const [totalCount, subTours, ratingStats] = await Promise.all([
          prisma.subTours.count({
            where: whereClause,
          }),
          
          prisma.subTours.findMany({
            where: whereClause,
            include: {
              SubTourInfo: true,
            },
            skip: (+page - 1) * 5,
            take: 5,
          }),

          prisma.subToursRating.aggregate({
            _avg: {
              rating: true,
            },
            _count: {
              rating: true,
            },
            where: {
              SubTours: whereClause,
            },
          }),
        ]);
        
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
    [`getAllSubTours_${page}_${slug}_${JSON.stringify(filters)}`],
    {
      tags: ["subTours"],
    }
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














