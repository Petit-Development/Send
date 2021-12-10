import { useState } from 'react';
import DownloadCast from './downloadCast';

export default () => {
  const [text, setText] = useState<string | undefined>(undefined);

  const getData = async (key: string) => {
    const res = await fetch('/api/download', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: key }),
    });
    const text = await res.json();
    setText(text.body);
  };
  return <DownloadCast text={text} onDownload={getData} />;
};
