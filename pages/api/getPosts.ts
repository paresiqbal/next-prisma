// next
import type { NextApiRequest, NextApiResponse } from "next";

// library
import prisma from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get Prisma to fetch the post
    const data = await prisma.post.findMany();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
