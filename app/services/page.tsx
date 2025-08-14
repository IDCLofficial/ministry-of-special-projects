import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import Link from "next/link";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            What We Offer
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Discover our comprehensive range of services designed to plan and manage special projects 
                            that support development in Imo State, working with other ministries to ensure projects 
                            are delivered well, on time, and for the good of the people.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Community & Social Development */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Community & Social Development Projects
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    World Bank-supported initiatives aimed at improving access to services for human development. 
                                    We empower communities to identify, prioritize, and implement micro-projects that address their specific needs.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Education infrastructure projects
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Healthcare facility development
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Water supply and rural infrastructure
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Light Up Imo Project */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Light Up Imo Project
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Comprehensive rural electrification and street lighting initiative designed to improve public safety, 
                                extend productive hours for businesses, and enhance the overall quality of life in communities.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Solar-powered street lighting
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Rural electrification programs
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Sustainable energy solutions
                                </li>
                            </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Road Infrastructure & Anti-Flood Projects */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Road Infrastructure & Anti-Flood Projects
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Construction, rehabilitation, and maintenance of critical road networks while implementing 
                                flood control measures to improve transportation efficiency and protect communities.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Road construction and rehabilitation
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Flood control systems
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Drainage infrastructure
                                </li>
                            </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Imo Digital City */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Imo Digital City Initiative
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Transforming Imo State into a technology and innovation hub through digital infrastructure, 
                                tech entrepreneurship promotion, and digital skills training for youth and businesses.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Digital infrastructure development
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Tech entrepreneurship programs
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Digital skills training
                                </li>
                            </ul>
                        </div>

                        {/* Service 5 - Strategic Partnerships & Donor Collaborations */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Strategic Partnerships & Donor Collaborations
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Collaboration with international development partners and donor agencies to implement 
                                impactful projects, leveraging resources, expertise, and funding for sustainable development.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    USAID partnership programs
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    World Bank project coordination
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    NDDC and NCDF collaborations
                                </li>
                            </ul>
                        </div>

                        {/* Service 6 - Project Management & Coordination */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Project Management & Coordination
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Comprehensive project planning, implementation, and monitoring services to ensure 
                                special projects are delivered on time, within budget, and meet quality standards.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Project planning and design
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Implementation oversight
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Quality assurance and monitoring
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Process Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            How to Access Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Follow these simple steps to access our special project services and development programs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Visit Our Office
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Visit our office at Block 10, State Secretariat Complex or contact us via phone/email
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Consultation
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Meet with our project specialists to discuss your development needs and identify suitable projects
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Application
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Complete project proposals and provide required documentation for assessment
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                4
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Service Delivery
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Receive approved project implementation and ongoing monitoring from our team
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
