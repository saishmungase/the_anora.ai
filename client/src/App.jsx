import { useState } from 'react'
import './App.css'

const MenuIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FeatureIcon = ({ children }) => (
    <div className="bg-teal-100 text-teal-600 rounded-lg w-12 h-12 flex justify-center items-center mb-4 shadow-sm">
        {children}
    </div>
);

const AppleIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.34,8.85a4.46,4.46,0,0,0-5.28-1.24,4.33,4.33,0,0,0-3.79,2.6A4.45,4.45,0,0,0,8.1,14.07c.42,1.27,1.1,2.53,2.09,3.42s1.7,1.4,2.5,1.4A2.33,2.33,0,0,0,15,18.5c.09-.12.15-.26.21-.4a.5.5,0,0,0-.31-.69.48.48,0,0,0-.6-.18,2,2,0,0,1-.85-.68,3.46,3.46,0,0,1-.52-2.12,4.45,4.45,0,0,1,2.09-3.48c.19-.13.39-.25.59-.36a.51.51,0,0,0,.2-.81A4.47,4.47,0,0,0,19.34,8.85Zm-2.55-2.66a2,2,0,0,1,1.24-1.23,2.06,2.06,0,0,0-1.88,1,2.1,2.1,0,0,0-1.2,1.86,2.1,2.1,0,0,1,1.84-1.63Z"/></svg>
);

const AndroidIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16,1H8A3,3,0,0,0,5,4V20a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V4A3,3,0,0,0,16,1Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V6A1,1,0,0,1,8,5h8a1,1,0,0,1,1,1ZM15.5,3h-7A.5.5,0,0,1,8,2.5h7a.5.5,0,0,1,0,1ZM14.29,8.29l-1-1A1,1,0,0,0,12.59,7H11.41a1,1,0,0,0-.71.29l-1,1A1,1,0,0,0,9.71,9.71l1,1a1,1,0,0,0,1.41,0l1-1a.8.8,0,0,0,.2-.32A1,1,0,0,0,14.29,8.29Zm-2.58,9.42a1,1,0,1,1-1.41-1.41,1,1,0,0,1,1.41,1.41ZM12,11.5A2.5,2.5,0,1,0,14.5,14,2.5,2.5,0,0,0,12,11.5Z"/></svg>
);


// --- COMPONENTS ---

const VoiceToTextVisual = () => (
    <div className="relative w-full max-w-lg mx-auto h-80 flex items-center justify-center p-4">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-teal-400/20 blur-3xl rounded-full"></div>
        
        {/* Sound Wave */}
        <div className="w-1/3 h-full flex flex-col justify-center items-center space-y-2">
            {[...Array(12)].map((_, i) => (
                <div 
                    key={i} 
                    className="bg-teal-400 rounded-full"
                    style={{
                        width: `${Math.sin(i * 0.5) * 30 + 70}%`,
                        height: '4px',
                        animation: `wave 1.5s infinite alternate ease-in-out ${i * 0.1}s`
                    }}
                />
            ))}
        </div>

        {/* Arrow */}
        <div className="w-1/3 h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-slate-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </div>
        
        {/* Text Output */}
        <div className="w-1/3 h-full flex flex-col justify-center items-start text-left text-slate-500 text-sm space-y-2">
            <p className="font-mono text-teal-500 animate-fade-in-1"># Meeting Notes</p>
            <p className="animate-fade-in-2"> - Core idea: fuse voice & AI</p>
            <p className="animate-fade-in-3"> - Transform spoken words</p>
            <p className="animate-fade-in-4"> - Target: bloggers, writers...</p>
        </div>

        <style>{`
            @keyframes wave {
                from { transform: scaleX(0.5); opacity: 0.5; }
                to { transform: scaleX(1); opacity: 1; }
            }
            @keyframes fade-in-1 { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes fade-in-2 { 0% { opacity: 0; } 25% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes fade-in-3 { 0% { opacity: 0; } 50% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes fade-in-4 { 0% { opacity: 0; } 75% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
            .animate-fade-in-1 { animation: fade-in-1 1s ease-out forwards; }
            .animate-fade-in-2 { animation: fade-in-2 1.5s ease-out forwards; }
            .animate-fade-in-3 { animation: fade-in-3 2s ease-out forwards; }
            .animate-fade-in-4 { animation: fade-in-4 2.5s ease-out forwards; }
        `}</style>
    </div>
);


// --- MAIN APP ---
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-slate-50 text-slate-800 font-sans antialiased w-full min-h-screen overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-slate-900">Anora</h1>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-slate-600 hover:text-teal-600 transition-colors">Features</a>
                        <a href="#how-it-works" className="text-slate-600 hover:text-teal-600 transition-colors">How It Works</a>
                        <a href="#cta" className="bg-teal-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-teal-600 transition-transform hover:scale-105 shadow-sm">Get Started</a>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800">
                            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/90 backdrop-blur-lg">
                        <nav className="flex flex-col items-center space-y-4 py-4">
                             <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-teal-600">Features</a>
                             <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-slate-600 hover:text-teal-600">How It Works</a>
                             <a href="#cta" onClick={() => setIsMenuOpen(false)} className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold">Get Started</a>
                        </nav>
                    </div>
                )}
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-slate-50"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] rounded-t-full bg-gradient-to-t from-teal-50 to-slate-50"></div>
                    </div>
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
                                Your Voice, Instantly Scribed.
                            </h2>
                            <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0 mb-8">
                                Anora effortlessly converts your spoken thoughts into polished blogs, journals, and social media posts. The future of content creation is here.
                            </p>
                            <a href="#cta" className="bg-teal-500 text-white text-lg px-8 py-4 rounded-full font-semibold hover:bg-teal-600 transition-transform hover:scale-105 shadow-lg inline-block">
                                Try Anora for Free
                            </a>
                        </div>
                        <div className="overflow-hidden flex items-center justify-center">
                            <VoiceToTextVisual />
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section id="how-it-works" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Create in Three Simple Steps</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center relative">
                            <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-teal-200 hidden md:block"></div>
                            <div className="relative bg-white p-6">
                                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-teal-500 text-white text-2xl font-bold rounded-full border-4 border-white">01</div>
                                <h4 className="font-semibold text-2xl mt-2 mb-2">Record</h4>
                                <p className="text-slate-600">Just tap and talk. Capture your ideas, meetings, or musings on the go with high-quality audio.</p>
                            </div>
                            <div className="relative bg-white p-6">
                                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-teal-500 text-white text-2xl font-bold rounded-full border-4 border-white">02</div>
                                <h4 className="font-semibold text-2xl mt-2 mb-2">Transform</h4>
                                <p className="text-slate-600">Our AI gets to work, transcribing and structuring your voice notes into your chosen format in seconds.</p>
                            </div>
                            <div className="relative bg-white p-6">
                                <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-teal-500 text-white text-2xl font-bold rounded-full border-4 border-white">03</div>
                                <h4 className="font-semibold text-2xl mt-2 mb-2">Publish</h4>
                                <p className="text-slate-600">Edit, export, and share your perfectly crafted content directly to your favorite platforms.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-slate-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <p className="text-teal-600 font-semibold">FEATURES</p>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Everything You Need to Create</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                                <FeatureIcon> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg> </FeatureIcon>
                                <h4 className="font-semibold text-xl mb-2">Crystal-Clear Transcription</h4>
                                <p className="text-slate-600">Industry-leading accuracy ensures your words are captured perfectly, every time.</p>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                                <FeatureIcon> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg> </FeatureIcon>
                                <h4 className="font-semibold text-xl mb-2">Smart Formatting</h4>
                                <p className="text-slate-600">AI automatically adds paragraphs, titles, and lists to structure your content beautifully.</p>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                                <FeatureIcon> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> </FeatureIcon>
                                <h4 className="font-semibold text-xl mb-2">Multiple Export Options</h4>
                                <p className="text-slate-600">Generate content as plain text, markdown, or formatted documents to fit any workflow.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="cta" className="py-20 bg-teal-500">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Stop Typing, Start Creating.</h3>
                        <p className="text-lg text-teal-100 max-w-2xl mx-auto mt-4 mb-8">
                            Join the waitlist and be the first to experience the most effortless way to bring your ideas to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                                <AppleIcon className="w-6 h-6" /> Get on the App Store
                            </button>
                             <button className="bg-slate-900/50 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-900 transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                                <AndroidIcon className="w-6 h-6" /> Get on Google Play
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-800 text-slate-400 py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; {new Date().getFullYear()} Anora. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}