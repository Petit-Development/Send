import Head from 'next/head';
import { Copy } from 'react-feather';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-petit-purple w-screen h-screen">
          <div className="flex flex-col h-full">
            <Upload />
            <div className="flex justify-around">
              <TabButton text={'Upload'} />
              <TabButton text={'Download'} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface TabButtonProps {
  text: string;
}

const TabButton: React.FC<TabButtonProps> = ({}) => (
  <div className="bg-purple-200 w-full text-center">Upload</div>
);

function Upload() {
  return (
    <div className="flex flex-col justify-center items-center content-center bg-arrow-up h-full w-full bg-center bg-no-repeat bg-contain">
      <div className="flex flex-col justify-center w-full items-center place-items-center">
        <div className="flex justify-center w-96 h-40 bg-white rounded-2xl shadow-xl">
          <textarea
            className=" p-3 border-transparent focus:outline-none w-full h-10/12 bg-transparent resize-none"
            placeholder="Enter Text to Upload..."
          />
        </div>

        <div className="flex mt-10 justify-start w-96 h-10 bg-white rounded-2xl shadow-xl">
          <input
            className="flex-none p-3 border-transparent focus:outline-none w-11/12 h-10/12 bg-transparent resize-none"
            placeholder="Enter Key..."
          />
          <div className="flex items-center  bg-petit-grey justify-center w-full text-center rounded-r-2xl">
            <Copy size="21" />
          </div>
        </div>
      </div>
    </div>
  );
}
