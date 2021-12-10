import type { NextApiRequest, NextApiResponse } from 'next';
import app from '../../secret/firebaseConfig';
import 'firebase-admin/firestore';

const firestore = app.firestore();

type Data = {
  body: string;
};

type Error = {
  error: string;
  body?: string;
};

const requiredKeys = ['text', 'key'];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Error | Data>
) {
  const missing = [];
  for (const key of requiredKeys) {
    if (!req.body.hasOwnProperty(key)) {
      console.log(key);
      missing.push(key);
    }
  }
  if (missing.length != 0) {
    console.log(missing);
    res.status(422).json({ error: `Missing ${missing.join(', ')}` });
  }
  const upload = req.body;
  try {
    await firestore.doc(`data/${upload.key}`).set({ text: upload.text });
  } catch {
    res.status(400).json({ error: 'Error uploading text' });
  }
  res.status(200).json({ body: 'Uploaded!' });
}
