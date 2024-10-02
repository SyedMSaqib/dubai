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
