import { FC, useState } from 'react';
import { Copy } from 'react-feather';
import Button from './button';

interface DownloadProps {
  text?: string;
}
export const Download: FC<DownloadProps> = ({ text = undefined }) => {
  const [key, setKey] = useState('');
  const textIsEmpty = text === undefined;
  return (
    <div className="bg-petit-grey z-0 flex flex-col justify-center items-center content-center bg-arrow-down h-full w-full bg-center bg-no-repeat bg-contain">
      <div className="flex flex-col justify-center w-full items-center place-items-center">
        <div
          className={`${
            textIsEmpty ? 'hidden' : 'visible'
          } flex flex-col justify-between w-96 h-40 bg-white rounded-2xl shadow-xl`}
        >
          <textarea
            className="p-3 border-transparent focus:outline-none w-full h-3/4 bg-transparent resize-none"
            placeholder="Downloaded Text"
            value={text}
            disabled={true}
          />
          <div
            onClick={() => navigator.clipboard.writeText(key)}
            className="flex bg-petit-purple h-10 items-center justify-center w-full text-center rounded-b-2xl"
          >
            <Copy color="#ffffff" size="21" />
          </div>
        </div>

        <div className="flex mt-10 justify-start w-96 h-10 bg-white rounded-2xl shadow-xl">
          <input
            className="flex-none p-3 border-transparent focus:outline-none w-11/12 h-10/12 bg-transparent resize-none"
            placeholder="Enter Key..."
            onChange={(change) => setKey(change.target.value)}
          />
        </div>
        <Button
          alt={true}
          text="Download"
          onClick={() => console.log({ text, key })}
        />
      </div>
    </div>
  );
};

export default Download;
