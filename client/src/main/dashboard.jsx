import React, { useState } from 'react';

// --- SVG ICONS ---
const PlusIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

const BellIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const MicIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-14 0m14 0a7 7 0 11-14 0m14 0v2a7 7 0 01-14 0v-2m14 0a7 7 0 00-14 0" />
    </svg>
);

const UploadIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const FolderIcon = (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
);

const SettingsIcon = (props) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// --- MOCK DATA ---
const user = {
    name: "Alex Duran",
    avatarUrl: "https://placehold.co/100x100/E2E8F0/4A5568?text=AD"
};

const projects = [
    { title: "Draft: The Future of AI", type: "Blog Post", words: 1240, duration: "15m 30s", date: "Oct 3" },
    { title: "Twitter Thread Ideas", type: "Social Media", words: 850, duration: "8m 10s", date: "Oct 1" },
    { title: "Summary of Q3 Brainstorm", type: "Meeting Recap", words: 2100, duration: "25m 05s", date: "Sep 29" },
    { title: "Reflections on the Week", type: "Journal Entry", words: 450, duration: "4m 15s", date: "Sep 28" },
];


// --- COMPONENTS ---

const Header = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    return (
        <header className="bg-white/70 backdrop-blur-lg sticky top-0 z-10 p-4 sm:p-6 border-b border-slate-200">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Anora</h1>
                <div className="flex items-center space-x-4">
                    <button className="hidden sm:inline-flex bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg items-center space-x-2 hover:bg-teal-600 transition-colors shadow-sm">
                        <PlusIcon className="w-5 h-5" />
                        <span>New Project</span>
                    </button>
                    <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                        <BellIcon className="w-6 h-6" />
                    </button>
                    <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                        <SettingsIcon className="w-6 h-6" />
                    </button>
                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button onClick={() => setIsProfileDropdownOpen(prev => !prev)} className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            <img src={user.avatarUrl} alt={user.name} className="w-10 h-10 rounded-full" />
                        </button>
                        {isProfileDropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                                <a href="#profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                                    Update Profile
                                </a>
                                <a href="#logout" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

const QuickActionButton = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:border-teal-500 transition-all cursor-pointer text-center">
        <div className="bg-teal-50 text-teal-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
            {icon}
        </div>
        <h3 className="font-bold text-slate-800 mt-4">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
    </div>
);

const ProjectRow = ({ title, type, words, duration, date }) => (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
        <td className="p-4 font-semibold text-slate-800">{title}</td>
        <td className="p-4 text-slate-500 hidden sm:table-cell">{type}</td>
        <td className="p-4 text-slate-500 hidden md:table-cell">{words}</td>
        <td className="p-4 text-slate-500 hidden md:table-cell">{duration}</td>
        <td className="p-4 text-slate-500 text-right">{date}</td>
    </tr>
);

// --- MAIN APP ---
export default function App() {
    return (
        <div className="w-full min-h-screen bg-slate-50 font-sans">
            <Header />
            <main className="p-4 sm:p-6 pb-28">
                {/* Greeting and Search */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">Welcome back, Alex!</h2>
                    <p className="text-slate-500 mt-1">Ready to transform your conversations into powerful content?</p>
                    <div className="relative mt-6">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search your projects..."
                            className="w-full bg-white border border-slate-200 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <QuickActionButton icon={<MicIcon className="w-8 h-8"/>} title="Start Recording" description="Record your voice to get started." />
                    <QuickActionButton icon={<UploadIcon className="w-8 h-8"/>} title="Upload an Audio File" description="Import an existing recording." />
                    <QuickActionButton icon={<FolderIcon className="w-8 h-8"/>} title="New from Template" description="Shape your content from the start." />
                </div>

                {/* Recent Projects Table */}
                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Projects</h3>
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="p-4 text-left font-semibold text-slate-600">Title</th>
                                    <th className="p-4 text-left font-semibold text-slate-600 hidden sm:table-cell">Format</th>
                                    <th className="p-4 text-left font-semibold text-slate-600 hidden md:table-cell">Words</th>
                                    <th className="p-4 text-left font-semibold text-slate-600 hidden md:table-cell">Original Duration</th>
                                    <th className="p-4 text-right font-semibold text-slate-600">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map(project => <ProjectRow key={project.title} {...project} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            
            {/* Floating Action Button */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
                 <button className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300">
                     <MicIcon className="w-8 h-8" />
                 </button>
            </div>
        </div>
    );
}