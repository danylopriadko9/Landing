import { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";

const coinImages = [
  "/images/coins/1.png",
  "/images/coins/2.png",
  "/images/coins/3.png",
  "/images/coins/4.png",
  "/images/coins/5.png",
];

function getRandomCoin() {
  const index = Math.floor(Math.random() * coinImages.length);
  return coinImages[index];
}

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prev) => [
        ...prev,
        {
          id: Date.now(),
          src: getRandomCoin(),
          left: Math.random() * 100,
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (id) => {
    setCoins((prev) => prev.filter((coin) => coin.id !== id));
  };

  const click = () => {
    window.location.href =
      "https://1waufy.com/casino/list?open=register&p=j0y5";
  };

  return (
    <div className="relative overflow-hidden">
      {coins.map((coin) => (
        <img
          key={coin.id}
          src={coin.src}
          className="absolute w-50 h-50 animate-fall"
          style={{ left: `${coin.left}%` }}
          onAnimationEnd={() => handleAnimationEnd(coin.id)}
        />
      ))}

      <div className="w-full min-h-screen bg-custom-bg bg-cover bg-center flex flex-col justify-center items-center px-4 py-8">
        <div className="w-full max-w-7xl flex justify-center items-center relative">
          <div className="flex flex-col gap-10 w-6/7 lg:w-1/3 z-10 ">
            <div className="flex flex-col gap-2">
              <div className="flex  flex-col w-full rounded-xl bg-purple-500/40 text-white shadow-lg overflow-hidden py-1 px-4 items-center gap-2">
                <p className="text-center">promo</p>
                <p className="text-center text-3xl font-bold">WELCOMEX5</p>
              </div>
              <div className="flex w-full rounded-xl bg-purple-500/40 text-white shadow-lg overflow-hidden py-1 px-4 items-center gap-4">
                <div className="relative w-24 h-24 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] shrink-0">
                  <img
                    src="/images/present.png"
                    alt="Gift"
                    className="w-max h-max rotate-[20deg] absolute left-[-30px] bottom-[-20px]"
                  />
                </div>
                <div className="flex flex-col justify-center text-sm sm:text-xl">
                  <p>
                    250 <span className="font-bold">FREE</span> Games
                  </p>
                  <p>
                    + 5X <span className="font-bold">MULTIPLIER</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => click()}
                className="animate-pulse-glow text-black uppercase font-bold px-5 py-3 bg-[#73FEE4] rounded-md text-xl sm:text-2xl md:text-3xl w-full"
              >
                claim
              </button>
            </div>
          </div>
          <div className=" absolute top-[-250px] sm:top-[-342px] sm:flex w-3/5 h-[500px]  lg:w-1/2 justify-center items-center z-0 ">
            <img
              className="h-full sm:h-[300px] md:h-[400px] lg:h-[700px] object-contain"
              src="/images/cat.png"
              alt="cat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
