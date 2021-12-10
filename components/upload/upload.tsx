import UploadCast from './uploadCast';

export default () => {
  return <UploadCast onUpload={postData} />;
};

async function postData(key: string, text: string) {
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: key, text: text }),
  });
  console.log(res);
}
