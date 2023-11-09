import React, { useEffect, useState } from "react";

interface CountdownTime {
  countdownDays: number;
  countdownHours: number;
  countdownMinutes: number;
  countdownSeconds: number;
}

const SpecialTimer: React.FC = () => {
  const [countdownTime, setCountdownTime] = useState<CountdownTime>({
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  });

  useEffect(() => {
    const expiryTime = new Date("2023-08-11T08:00:00Z").getTime(); // Set your specific expiry time here
    const countdownTimer = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = expiryTime - currentTime;

      if (remainingTime < 0) {
        clearInterval(countdownTimer);
        setCountdownTime({
          countdownDays: 0,
          countdownHours: 0,
          countdownMinutes: 0,
          countdownSeconds: 0,
        });
      } else {
        const totalSeconds = Math.floor(remainingTime / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        setCountdownTime({
          countdownDays: totalDays,
          countdownHours: totalHours % 24,
          countdownMinutes: totalMinutes % 60,
          countdownSeconds: totalSeconds % 60,
        });
      }
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <>
  
         <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-12 relative gap-2 px-3 py-2 rounded bg-[#330025]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-white">{countdownTime.countdownDays}</p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#330025]">Days</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-1 relative gap-2 px-1 py-2 rounded">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#330025]">:</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-12 relative gap-2 px-3 py-2 rounded bg-[#330025]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-white">{countdownTime.countdownHours}</p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#330025]">Hrs</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-1 relative gap-2 px-1 py-2 rounded">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#330025]">:</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-12 relative gap-2 px-3 py-2 rounded bg-[#330025]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-white">{countdownTime.countdownMinutes}</p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#330025]">Mins</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-1 relative gap-2 px-1 py-2 rounded">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-[#330025]">:</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-1">
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-12 relative gap-2 px-3 py-2 rounded bg-[#330025]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-white">{countdownTime.countdownSeconds}</p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#330025]">Sec</p>
          </div>
        </div>
    </>
  );
};

export default SpecialTimer;
