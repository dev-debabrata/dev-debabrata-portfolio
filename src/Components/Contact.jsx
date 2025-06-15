import React, { useState, useEffect, useRef } from "react";



const tabs = [
    { id: 0, title: "Home" },
    { id: 1, title: "Features" },

];


const Contact = () => {

    const tabRef = useRef(null);
    const [tabWidth, setTabWidth] = useState(0);
    const [currentTab, setCurrentTab] = useState(0);

    const updateWidth = () => {
        if (tabRef.current) {
            const parentWidth = tabRef.current.getBoundingClientRect().width;
            const numberOfTabs = tabs.length;
            const newTabWidth = parentWidth / numberOfTabs;
            setTabWidth(newTabWidth);
        }
    };

    useEffect(() => {
        const resizeObserver = new ResizeObserver(updateWidth);
        if (tabRef.current) {
            resizeObserver.observe(tabRef.current);
        }
        return () => {
            if (tabRef.current) {
                resizeObserver.unobserve(tabRef.current);
            }
        };
    }, [tabs.length]);

    return (
        <div
            ref={tabRef}
            className="xl:w-[30%] w-[80%] mx-auto flex items-center justify-between relative rounded-full bg-gray-200 p-1"
        >
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className="relative py-3 text-sm font-semibold z-10"
                    style={{ width: tabWidth }}
                    onClick={() => setCurrentTab(tab.id)}
                >
                    {tab.title}
                </button>
            ))}

            {/* Animated slider */}
            <div
                className="absolute inset-0 bg-whi rounded-full bg-blue-600  transition-all duration-300"
                style={{
                    width: `${tabWidth}px`,
                    transform: `translateX(${currentTab * tabWidth}px)`,
                }}
            />
        </div>
    )
}

export default Contact