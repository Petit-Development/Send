import { toast } from 'react-toastify';
import { Toast } from '../toast';
import UploadCast from './uploadCast';

export default () => {
  return <UploadCast onUpload={postData} />;
};

async function postData(key: string, text: string) {
  await fetch('/api/upload', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: key, text: text }),
  });

  toast(
    <Toast
      title="Successfully Uploaded!"
      subtitle={`use key ${key} to download again `}
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
}
