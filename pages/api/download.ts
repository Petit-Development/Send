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

const requiredKeys = ['key'];

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
  const download = req.body;
  try {
    const doc = await firestore.doc(`data/${download.key}`).get();
    const data = doc.data();
    if (data === undefined) {
      res.status(400).json({ error: `No doc at path ${download.key}` });
      return;
    }
    res.status(200).json({ body: data.text });
  } catch {
    res.status(400).json({ error: 'Error downloading text' });
  }
}
