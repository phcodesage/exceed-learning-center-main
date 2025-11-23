import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, Globe, Phone } from 'lucide-react';

const WinterWorkshopsPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/workshops')}
                        className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Back to Workshops
                    </button>
                    <div className="text-xl font-bold text-slate-800">Winter Series 2025</div>
                </div>
            </nav>

            {/* Workshop 1: Letter for Your Future Self */}
            <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden" style={{ backgroundColor: '#FDF2F2' }}>
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#CA3433] transform skew-x-12 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#0E1F3E] rounded-tr-full opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content Card */}
                        <div className="bg-[#0E1F3E] text-white p-12 rounded-[3rem] relative shadow-2xl transform -rotate-1">
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-bl-[3rem]"></div>
                            <div className="border-l-4 border-dashed border-red-500/50 pl-6 py-4 mb-8">
                                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
                                    Letter for<br />Your<br />Future Self
                                </h2>
                            </div>

                            <h3 className="text-4xl font-bold text-[#CA3433] mb-8">Workshop</h3>

                            <div className="bg-[#CA3433] text-white p-6 rounded-2xl mb-8 transform rotate-1 shadow-lg">
                                <p className="text-xl font-medium text-center">
                                    Reflect, write, and reconnect with who you are today
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="border-2 border-[#CA3433] rounded-full px-6 py-2 bg-[#FDF2F2] text-[#0E1F3E] font-bold">
                                    23 December, 2025
                                </div>
                                <div className="border-2 border-[#CA3433] rounded-full px-6 py-2 bg-[#FDF2F2] text-[#0E1F3E] font-bold">
                                    6:00 PM
                                </div>
                            </div>

                            <div className="space-y-3 text-sm opacity-90">
                                <div className="flex items-center gap-3">
                                    <MapPin size={18} />
                                    <span>1360 Willis Ave, Albertson, NY 11507</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Globe size={18} />
                                    <span>www.exceedlearningcenterny.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="relative h-[600px] hidden md:block">
                            <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                                <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Writing" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Group discussion" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop 2: A Year in Review */}
            <section className="min-h-screen relative flex items-center bg-[#0E1F3E] text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Sunset" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0E1F3E] via-[#0E1F3E]/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 py-20">
                    <div className="flex flex-col md:flex-row justify-end items-center">
                        <div className="md:w-1/2 lg:w-5/12 bg-[#0E1F3E]/90 backdrop-blur-sm p-12 rounded-lg shadow-2xl border-l-8 border-[#CA3433]">
                            <div className="text-2xl mb-4 font-light tracking-widest">2025 → 2026</div>
                            <h2 className="text-7xl font-serif italic mb-2">A Year</h2>
                            <h2 className="text-7xl font-bold text-[#CA3433] mb-6">in Review</h2>
                            <p className="text-2xl italic mb-12 text-gray-300">Celebrate, Release and Renew</p>

                            <div className="space-y-6 mb-12">
                                <div>
                                    <h3 className="text-3xl font-light">DECEMBER 30, 2025</h3>
                                    <h3 className="text-3xl font-light">6:00 PM</h3>
                                </div>
                                <div className="text-gray-400">
                                    <p>1360 WILLIS AVE,</p>
                                    <p>ALBERTSON, NY 11507</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-end border-t border-gray-700 pt-8">
                                <div>
                                    <div className="text-[#CA3433] font-bold mb-1">More Information</div>
                                    <div className="text-sm text-gray-400">www.exceedlearningcenterny.com</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl">+1 (516) 226-3114</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop 3: Redefining Success */}
            <section className="min-h-screen bg-white py-20 relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 clip-diagonal"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-[#0E1F3E] p-4 rounded-lg mb-8">
                                <div className="w-12 h-12 bg-[#CA3433] flex items-center justify-center text-white font-bold text-xl">E</div>
                            </div>

                            <h2 className="text-6xl font-bold text-[#CA3433] mb-4">Workshop:</h2>
                            <h2 className="text-5xl font-bold text-[#0E1F3E] mb-2">Redefining Success</h2>
                            <h2 className="text-5xl font-bold text-[#0E1F3E] mb-8">What Truly<br />Matters to You</h2>

                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Redefine what success means to you. Join our Workshop and discover what truly matters for a fulfilling life.
                            </p>

                            <div className="bg-[#CA3433] text-white px-8 py-4 rounded-r-full inline-block text-xl font-bold mb-8 shadow-lg">
                                Detail Information:
                            </div>

                            <div className="space-y-4 mb-12">
                                <div className="bg-[#0E1F3E] text-white rounded-full p-2 pr-8 flex items-center gap-4 w-fit">
                                    <div className="bg-white text-[#0E1F3E] p-2 rounded-full">
                                        <Calendar size={24} />
                                    </div>
                                    <span className="text-xl font-bold">17 DEC, 2025</span>
                                </div>
                                <div className="bg-[#0E1F3E] text-white rounded-full p-2 pr-8 flex items-center gap-4 w-fit">
                                    <div className="bg-white text-[#0E1F3E] p-2 rounded-full">
                                        <Clock size={24} />
                                    </div>
                                    <span className="text-xl font-bold">6:00 PM</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-8">
                                <div className="bg-[#CA3433] text-white p-3 rounded-full">
                                    <Phone size={24} />
                                </div>
                                <div className="bg-[#CA3433] text-white p-3 rounded-full">
                                    <Globe size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-12">
                                    <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="h-48 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smiling woman" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-48 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office discussion" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="h-64 bg-[#CA3433] rounded-3xl flex items-center justify-center text-white text-center p-6 shadow-xl relative overflow-hidden group cursor-pointer">
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-2">REGISTER NOW!</h3>
                                            <ArrowLeft className="rotate-180 mx-auto group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop 4: Goals with Souls */}
            <section className="min-h-screen relative flex items-center justify-center py-20">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Team collaboration" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F3E]/90 via-[#0E1F3E]/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-4xl">
                        <h2 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">WORKSHOP:</h2>
                        <h3 className="text-5xl md:text-6xl font-bold mb-12">Goals with Souls</h3>

                        <div className="mb-12">
                            <div className="text-4xl font-bold mb-2">DECEMBER 1, 2025</div>
                            <div className="text-4xl font-bold">6:00PM</div>
                        </div>

                        <button className="border-2 border-white rounded-full px-12 py-4 text-xl hover:bg-white hover:text-[#0E1F3E] transition-all mb-20">
                            Sign Up Today!
                        </button>

                        <div className="border-t border-white/30 pt-8 mt-12">
                            <div className="text-2xl italic mb-2">+1 (516) 226-3114</div>
                            <div className="text-2xl italic">1360 Willis Ave, Albertson, NY 11507</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshop 5: The Art of Saying No */}
            <section className="min-h-screen bg-[#FFFBF7] py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="order-2 md:order-1">
                            <div className="w-20 h-20 bg-[#CA3433] mb-12 flex items-center justify-center text-white font-bold text-2xl">E</div>

                            <h2 className="text-6xl font-bold text-[#CA3433] mb-6">WORKSHOP:</h2>
                            <h3 className="text-6xl font-serif text-[#CA3433] mb-4">The art of</h3>
                            <h3 className="text-6xl font-serif text-[#CA3433] mb-12">saying "no"</h3>

                            <h4 className="text-4xl font-bold text-[#0E1F3E] mb-2">Boundaries for</h4>
                            <h4 className="text-4xl font-bold text-[#0E1F3E] mb-12">Better Life</h4>

                            <div className="bg-[#0E1F3E] text-white rounded-[3rem] px-12 py-8 inline-block mb-12">
                                <div className="text-2xl font-bold mb-2">December 08, 2025</div>
                                <div className="text-2xl font-bold text-center">6:00pm</div>
                            </div>

                            <div className="text-[#0E1F3E] space-y-2 text-lg">
                                <p>+1 (516) 226-3114</p>
                                <p>1360 Willis Ave, Albertson, NY 11507</p>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 grid gap-8">
                            <div className="ml-auto w-64 h-64 rounded-lg overflow-hidden shadow-lg transform translate-x-4">
                                <img src="https://images.unsplash.com/photo-1544367563-121910aa662f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meditation" className="w-full h-full object-cover" />
                            </div>
                            <div className="mr-auto w-72 h-72 rounded-lg overflow-hidden shadow-lg transform -translate-x-4">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Saying no" className="w-full h-full object-cover" />
                            </div>
                            <div className="ml-auto w-80 h-64 rounded-lg overflow-hidden shadow-lg">
                                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Group meeting" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WinterWorkshopsPage;
