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
        const [totalCount, subTours] = await Promise.all([
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
          })
        ]);

        // Return both the paginated subTours and total count
        return {
          subTours,
          totalCount,
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
