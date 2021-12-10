import { useState } from 'react';
import { toast } from 'react-toastify';
import { Toast } from '../toast';
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
    toast(
      <Toast
        title="Successfully Downloaded!"
        subtitle={`Click copy to copy to clipboard`}
      />,
      {
        closeButton: undefined,
        position: 'bottom-center',
        hideProgressBar: true,
        style: {
          background: 'none',
        },
      }
    );
    setText(text.body);
  };
  return <DownloadCast text={text} onDownload={getData} />;
};
