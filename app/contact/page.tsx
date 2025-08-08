import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* Green Header Bar */}
            <div className="bg-green-600 h-20"></div>

            {/* Main Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Contact Information */}
                        <div>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                    Let&apos;s Stay Connected
                                </h1>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                                <p className="text-gray-600 mb-12 leading-relaxed">
                                    We welcome your inquiries and feedback. Contact the Ministry of Special Projects through any of the channels below, and our dedicated team will respond to you promptly.
                                </p>
                            </AnimatedEntrance>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Phone */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                        <a href="tel:+2348143975074" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">0814 397 5074</a>
                                    </div>
                                </AnimatedEntrance>

                                {/* Office */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Head office address</h3>
                                        <p className="text-gray-600">
                                            Ministry of Special Projects, Block 10, State Secretariat Complex, Owerri, Imo State, Nigeria
                                        </p>
                                    </div>
                                </AnimatedEntrance>

                                {/* Socials */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Socials</h3>
                                    <div className="flex space-x-3">
                                        <a href="https://www.facebook.com/p/Ministry-of-Special-Duties-Imo-State-100095781721605/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                                            </svg>
                                        </a>
                                    </div>
                                    </div>
                                </AnimatedEntrance>
                                
                                {/* Email */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                        <a href="mailto:imost.ministryofspecialduties@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                            imost.ministryofspecialduties@gmail.com
                                        </a>
                                    </div>
                                </AnimatedEntrance>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={400}>
                            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <form className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">SEND US A MESSAGE</h3>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        NAME
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        COMPANY
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your company"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        PHONE
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your phone number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        SUBJECT
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        placeholder="Message subject"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        MESSAGE OR COMPLAIN
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                        placeholder="Your message or complaint..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:transform hover:scale-105 duration-300"
                                >
                                    Send message
                                </button>
                            </form>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>
        </div>
    );
}
