import { RequestHandler } from 'express';

export const identifyHandler: RequestHandler = async (req, res) => {
  try {
    const { email, phoneNumber } = req.body;
    // TODO: implement identify logic
    const result = { email, phoneNumber };
    res.status(200).json({ contact: result });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
