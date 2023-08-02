// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  if (req.method == "POST") {
    res.status(200).json({ list: new Array(30).fill(req.body.test) });
  }
  // res.status(200).json({ name: 'John Doe' })
}
