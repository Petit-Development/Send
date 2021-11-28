import { useState } from 'react';
import { Copy } from 'react-feather';
import Button from './button';

export const Upload = () => {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');

  return (
    <div className="z-0 flex flex-col justify-center items-center content-center bg-arrow-up h-full w-full bg-center bg-no-repeat bg-contain">
      <div className="flex flex-col justify-center w-full items-center place-items-center">
        <div className="flex justify-center w-96 h-40 bg-white rounded-2xl shadow-xl">
          <textarea
            className=" p-3 border-transparent focus:outline-none w-full h-10/12 bg-transparent resize-none"
            placeholder="Enter Text to Upload..."
            onChange={(change) => setText(change.target.value)}
          />
        </div>

        <div className="flex mt-10 justify-start w-96 h-10 bg-white rounded-2xl shadow-xl">
          <input
            className="flex-none p-3 border-transparent focus:outline-none w-11/12 h-10/12 bg-transparent resize-none"
            placeholder="Enter Key..."
            onChange={(change) => setKey(change.target.value)}
          />
          <div
            onClick={() => navigator.clipboard.writeText(key)}
            className="flex items-center bg-petit-grey justify-center w-full text-center rounded-r-2xl"
          >
            <Copy size="21" />
          </div>
        </div>
        <Button text="Upload" onClick={() => console.log({ text, key })} />
      </div>
    </div>
  );
};

export default Upload;
