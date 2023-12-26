import { useEffect, useState } from 'react';
import './clock.css';

function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        };
    }, []);

    return (
        <div className="widget">
            <div>
                <p className="date">{date.toLocaleDateString()}</p>
                <p className="time">{date.toLocaleTimeString()}</p>
            </div>
        </div>
    );
}


export default Clock;