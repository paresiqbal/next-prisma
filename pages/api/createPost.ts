// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type postProps = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    if (req.method === "POST") {
      // Check for title
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        return res.status(500).json({ messaage: "Just Error" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
