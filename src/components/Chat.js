import React, { useEffect, useState, useRef } from 'react';
import dmIcon from '../assets/logo512.png'
import { useSwipeable } from 'react-swipeable';


const ChatInterface = () => {
    const messages = [
        { playerImg: "https://cdna.artstation.com/p/assets/images/images/009/266/990/large/cassidy-cook-orin-icon.jpg?1518021435", playerName: "Bard", playerMsg: "Can I sing?", dmMsg: <p>Yes. You can sing. But you need to roll a <strong>d20</strong> to see how well you sing.</p> },
        { playerImg: "https://cdna.artstation.com/p/assets/images/images/009/266/992/large/cassidy-cook-varus-icon.jpg?1518021439", playerName: "Fighter", playerMsg: "Can I attack the villager?", dmMsg: <p>Sure, but I would like to remind you that every move you made has consequences</p> },
        { playerImg: 'https://pbs.twimg.com/media/DhHvbkFWAAEUVEf.jpg', playerName: "Warlock", playerMsg: "I would like to cast Eldritch Blast at the inn keeper", dmMsg: <p>Please roll a <strong>d20</strong> for your attack roll.</p> },
        // Add more messages as needed
    ];

    return (
        <Chat messages={messages} />
    );
}

const Chat = ({ messages }) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null); // Ref for storing interval

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleMessageChange('next'),
        onSwipedRight: () => handleMessageChange('prev')
    });

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
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                handleMessageChange('prev');
            } else if (event.key === 'ArrowRight') {
                handleMessageChange('next');
            }
        };
    
            window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress > 100) {
                    handleMessageChange('next');
                    return 0;
                }
                return prevProgress + 3; // Increase progress bar width by 3% every 150ms
            });
        }, 150); // Update progress bar every 150 milliseconds

        return () => clearInterval(intervalRef.current); // Clean up the interval on unmount
    }, []);

    const { playerName, playerMsg, dmMsg, playerImg } = messages[currentMessageIndex];

    return (
      
            <div {...swipeHandlers} className="p-4 bg-Putty bg-opacity-40 rounded-lg">
                {/* Player Message */}
                <div className="flex flex-col items-end mb-4">
                    <div className="flex items-center mb-2">
                        <span className="text-sm font-bold mr-2">{playerName}</span>
                        <img src={playerImg} alt="Player" className="h-8 w-8 rounded-full" />
                    </div>
                    <div className="bg-GreenMist rounded-lg p-2">
                        <p className="text-sm">{playerMsg}</p>
                    </div>
                </div>

                {/* Dungeon Master Message */}
                <div className="flex flex-col items-start mb-4">
                    <div className="flex items-center mb-2">
                        <img src={dmIcon} alt="Dungeon Master" className="h-8 w-8 rounded-full mr-2" />
                        <span className="text-sm font-bold">Dungeon Master</span>
                    </div>
                    <div className="bg-Putty rounded-lg p-2">
                        <p className="text-sm text-start">{dmMsg}</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-8/12 mx-auto h-1 bg-white rounded">
                    <div
                        className="h-full bg-Putty rounded"
                        style={{ width: `${progress}%`, transition: 'width 0.5s ease' }}
                    ></div>
                </div>

                {/* Buttons to change message */}
                <div className="flex justify-center items-center mt-2 space-x-1">
                    <button onClick={() => handleMessageChange('prev')} className="bg-Putty hover:bg-opacity-50 flex justify-center items-center text-white font-bold px-2 py-1 rounded-full ">
                        &larr;
                    </button>
                    <div className="flex justify-center items-center space-x-1">
                        {messages.map((message, index) => (
                            <button
                                key={index}
                                onClick={() => handleJumpToMessage(index)}
                                className={`bg-Putty text-white hover:bg-opacity-50 font-bold p-4 rounded-full ${currentMessageIndex === index ? 'bg-opacity-50' : ''} `}
                            >
                            </button>
                        ))}
                    </div>
                    <button onClick={() => handleMessageChange('next')} className="bg-Putty hover:bg-opacity-50 flex justify-center items-center text-white font-bold px-2 py-1 rounded-full">
                        &rarr;
                    </button>
                </div>
            </div>
        
    );
}

export default ChatInterface;