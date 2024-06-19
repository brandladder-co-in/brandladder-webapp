import { useState } from 'react';

const ScrollableTabs = ({ tabs, onSelect }) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].key);

    const handleTabChange = (key) => {
        setSelectedTab(key);
        onSelect(key);
    };

    return (
        <div className="inline-flex rounded-lg border border-gray-100 bg-orange-4 p-2 shadow-xl overflow-x-auto">
            {tabs.map(tab => (
                <button
                    key={tab.key}
                    className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === tab.key ? 'text-black font-semibold bg-orange-2' : 'text-gray-500 hover:text-gray-900 focus:bg-orange-200 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                    onClick={() => handleTabChange(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default ScrollableTabs;
