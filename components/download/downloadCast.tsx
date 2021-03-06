import { FC, useState } from 'react';
import { Copy } from 'react-feather';
import { Toast } from '../toast';
import { toast } from 'react-toastify';
import Button from '../button';

interface DownloadCastProps {
  text?: string;
  onDownload: (key: string) => void;
}

export const DownloadCast: FC<DownloadCastProps> = ({
  text = undefined,
  onDownload,
}) => {
  const [key, setKey] = useState('');
  const textIsEmpty = text === undefined;
  return (
    <div className="bg-petit-grey z-0 flex flex-col justify-center items-center content-center bg-arrow-down h-full w-full bg-center bg-no-repeat bg-contain">
      <div className="flex flex-col justify-center w-full items-center place-items-center">
        <div className="flex mt-10 justify-start w-96 h-10 bg-white rounded-2xl shadow-xl">
          <input
            className="flex-none p-3 border-transparent focus:outline-none w-11/12 h-10/12 bg-transparent resize-none"
            placeholder="Enter Key..."
            onChange={(change) => setKey(change.target.value)}
          />
        </div>
        <Button alt={true} text="Download" onClick={() => onDownload(key)} />
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
            onClick={() => {
              toast(
                <Toast
                  title="Copied to Clipboard"
                  subtitle={`Text copied to clipboard`}
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
              navigator.clipboard.writeText(key);
            }}
            className="cursor-pointer hover:opacity-80 flex bg-petit-purple h-10 items-center justify-center w-full text-center rounded-b-2xl"
          >
            <Copy color="#ffffff" size="21" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DownloadCast;
