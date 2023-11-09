import{ useEffect, useState } from 'react';

interface CountdownTime {
  countdownDays: number;
  countdownHours: number;
  countdownMinutes: number;
  countdownSeconds: number;
}

interface CountdownTimerProps {
  time: string;
}

function CountdownTimer({ time }: CountdownTimerProps) {
  const [expiryTime, setExpiryTime] = useState<string>(time); // Use time prop as initial value
  const [countdownTime, setCountdownTime] = useState<CountdownTime>({
    countdownDays: 0,
    countdownHours: 0,
    countdownMinutes: 0,
    countdownSeconds: 0,
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor(
        (remainingDayTime % (1000 * 60)) / 1000
      );

      const runningCountdownTime: CountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime("Expired");
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
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
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-12  relative gap-2 px-3 py-2 rounded bg-[#330025]">
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
          <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-12 w-12  relative gap-2 px-3 py-2 rounded bg-[#330025]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-white">{countdownTime.countdownSeconds}</p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#330025]">Sec</p>
          </div>
        </div>
   </>
  );
}

export default CountdownTimer;
