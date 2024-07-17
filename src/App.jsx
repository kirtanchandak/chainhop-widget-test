import { SwapSDK } from "@chainflip/sdk/swap";
import { IoMdInformationCircleOutline } from "react-icons/io";
import bitcoin from "./assets/coins/bitvoin.png";
import eth from "./assets/coins/eth.png";
import { useState } from "react";

function App() {
  const sdk = new SwapSDK({ network: "perseverance" });
  const [destAddress, setDestAddress] = useState("");
  const [amount, setAmount] = useState("");

  const qouteArgs = {
    srcAsset: "BTC",
    srcChain: "Bitcoin",
    destAsset: "ETH",
    destChain: "Ethereum",
    destAddress: "0x1234",
    amount: (amount * 1e8).toString(),
  };

  const quote = async () => {
    const ch = await sdk.getQuote(qouteArgs);
    console.log(ch);
  };

  const channel = async () => {
    try {
      const ck = await sdk.requestDepositAddress({
        ...qouteArgs,
        destAddress: destAddress,
        maxBoostFeeBps: 30,
      });
      alert(ck.depositAddress);
    } catch (err) {
      console.log(err);
    }
  };

  // const channelId = "1755479-Bitcoin-178";

  // const status = async () => {
  //   const st = await sdk.getStatus({ id: channelId });
  //   console.log(st);
  // };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="bg-gray-800 text-white w-[500px] p-4 rounded-md">
          <div className="flex justify-between">
            <p className="text-xl font-bold">Swap</p>
            <IoMdInformationCircleOutline size={20} className="mt-[1px]" />
          </div>
          <div>
            <div className="mt-5 p-3 flex justify-between border border-gray-300 rounded-md">
              <div className="flex flex-col">
                <label htmlFor="">Deposit</label>
                <input
                  type="text"
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-black mt-2 rounded-md"
                />
              </div>
              <div className="flex gap-2">
                <img src={bitcoin} alt="btc" className="w-8 object-contain" />
                <p className="mt-4">BTC</p>
              </div>
            </div>
            <div className="mt-5 p-3 flex justify-between border border-gray-300 rounded-md">
              <div className="flex flex-col">
                <label htmlFor="">Recieve</label>
                <input type="text" className="mt-2 rounded-md" />
              </div>
              <div className="flex gap-2">
                <img src={eth} alt="btc" className="w-8 object-contain" />
                <p className="mt-4">ETH</p>
              </div>
            </div>
            <div className="flex gap-2 mt-8">
              <label htmlFor="">Destination address</label>
              <input
                type="text"
                className=" rounded-md text-black"
                onChange={(e) => setDestAddress(e.target.value)}
              />
            </div>
            <button className="mt-8 bg-yellow-300 p-2" onClick={channel}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
