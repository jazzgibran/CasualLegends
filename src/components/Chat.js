import React, { useEffect, useState } from 'react';

const ChatInterface = () => {
    const messages = [
        { playerName: "Bard", playerMsg: "Can I sing?", dmMsg: <p>Yes. You can sing. But you need to roll a <strong>d20</strong> to see how well you sing.</p> },
        { playerName: "Fighter", playerMsg: "Can I attack the villager?", dmMsg: <p>Sure, but I would like to remind you that every move you made has consequences</p> },
        { playerName: "Warlock", playerMsg: "I would like to cast Eldritch Blast at the inn keeper", dmMsg: <p>Please roll a <strong>d20</strong> for your attack roll.</p> },
        // Add more messages as needed
    ];

    return (
        <Chat messages={messages} />
    );
}

const Chat = ({ messages }) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    let interval;

    const handleMessageChange = (direction) => {
        if (direction === 'next') {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setProgress(0);
        } else if (direction === 'prev') {
            setCurrentMessageIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
            setProgress(0);
        }
    };

    const handleJumpToMessage = (index) => {
        setCurrentMessageIndex(index);
        setProgress(0);
    };

    useEffect(() => {
        interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress > 100) {
                    handleMessageChange('next');
                    return 0;
                }
                return prevProgress + 3; // Increase progress bar width by 1% every 50ms
            });
        }, 150); // Update progress bar every 50 milliseconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    const { playerName, playerMsg, dmMsg } = messages[currentMessageIndex];

    return (
        <div className="p-4 bg-white bg-opacity-80  rounded-lg">
            {/* Bard Message */}
            <div className="flex flex-col items-end mb-4">
                <div className="flex items-center mb-4">
                    <img src="" alt="Bard" className="h-8 w-8 rounded-full mr-2" />
                    <span className="text-sm font-bold">{playerName}</span>
                </div>
                <div className="bg-blue-100 rounded-lg p-2">
                    <p className="text-sm">{playerMsg}</p>
                </div>
            </div>

            {/* Game Master Message */}
            <div className="flex flex-col items-start mb-4">
                <div className="flex items-center mb-4">
                    <img src="" alt="Game Master" className="h-8 w-8 rounded-full mr-2" />
                    <span className="text-sm font-bold">Game master</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-2">
                    <p className="text-sm text-start">{dmMsg}</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="w-8/12 mx-auto h-1 bg-gray-200 rounded">
                <div
                    className="h-full bg-Putty rounded"
                    style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
                ></div>
            </div>

            {/* Buttons to change message */}
            <div className="flex justify-center items-center mt-2 space-x-1">
                <button onClick={() => handleMessageChange('prev')} className="bg-Putty hover:bg-opacity-50 text-white font-bold px-2 py-1 rounded-full ">
                    &larr;
                </button>
                <div className="flex justify-center items-center space-x-1">
                {messages.map((message, index) => (
                    <button
                        key={index}
                        onClick={() => handleJumpToMessage(index)}
                        className={`bg-Putty hover:bg-opacity-100 text-white font-bold p-4 rounded-full ${currentMessageIndex === index ? 'bg-opacity-50' : ''}`}
                    >
                    </button>
                ))}
            </div>
                <button onClick={() => handleMessageChange('next')} className="bg-Putty hover:bg-opacity-50 text-white font-bold px-2 py-1 rounded-full">
                    &rarr;
                </button>
            </div>
        </div>
    );
}

export default ChatInterface;
