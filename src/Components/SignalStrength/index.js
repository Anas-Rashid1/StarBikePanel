import React, { useEffect, useState } from 'react';

const Signalstrength = ({ batteryPercentage }) => {
    const [signalBars, setSignalBars] = useState([]);

    useEffect(() => {
        const calculateSignalBars = () => {
            let bars = [];

            if (batteryPercentage <= 20 && batteryPercentage > 0 || batteryPercentage === 0) {
                bars = ['red', 'gray', 'gray', 'gray', 'gray'];
            } else if (batteryPercentage < 40 && batteryPercentage > 20) {
                bars = ['yellow', 'yellow', 'gray', 'gray', 'gray'];
            } else if (batteryPercentage < 60) {
                bars = ['green', 'green', 'green', 'gray', 'gray'];
            } else if (batteryPercentage === 100) {
                bars = ['green', 'green', 'green', 'green', 'green'];
            } else {
                bars = ['gray', 'gray', 'gray', 'gray', 'gray'];
            }

            setSignalBars(bars);
        };

        calculateSignalBars();
    }, [batteryPercentage]);

    return (
        <div className="flex flex-row items-end gap-1">
            {signalBars.map((color, index) => (
                <>
                    {console.log("rajja", color)}
                    < div
                        key={index}
                        className={`w-2 bg-${color}-600 rounded-md`}
                        style={{ height: `${index * 5 + 10}px` }}
                    />
                </>
            ))}
        </div>
    );
};

export default Signalstrength;
