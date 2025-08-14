import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/photos/Photo - Ministry of Special Projects.jpg"
                                alt="Ministry of Special Projects - Driving Development in Imo State"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry of Special Projects is dedicated to planning and managing special projects that support development in Imo State.
                                    We work collaboratively with other ministries to ensure projects are completed effectively, on schedule, and for the benefit of all citizens.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    Our ministry serves as a leading catalyst for sustainable development in Imo State, focusing on
                                    critical infrastructure and development initiatives. We drive progress through strategic planning,
                                    effective project management, and collaboration with various stakeholders to ensure the successful
                                    implementation of key projects that enhance the quality of life for all Imo citizens.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={600}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    We are committed to building a better Imo State by leading important projects that improve lives,
                                    grow communities, and support progress. Our vision is to enhance the state&apos;s development through
                                    well-planned and efficiently executed projects that create lasting positive impact across all sectors.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {/* Our Vision */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    To help build a better Imo State by leading important projects that improve lives,
                                    grow communities, and support progress across all sectors of development.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Our Mission */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                    To plan and manage special projects that support development in Imo State,
                                    work with other ministries, and ensure projects are completed effectively,
                                    on time, and for the benefit of all citizens.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Coordinate and implement special development projects across the state</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Collaborate with other ministries for integrated development</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Ensure timely and effective project delivery</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <p className="text-sm sm:text-base text-gray-700">Drive innovation in project planning and implementation</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedEntrance>
                    </div>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Hon. Dr. Elias Emedom
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honorable Commissioner for Special Projects
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Hon. Dr. Elias Emedom is a seasoned public servant in Imo State, currently serving as Commissioner for Special Projects,
                                where he is central to driving critical infrastructure and development initiatives. With a wealth of experience
                                across various sectors of governance, Dr. Emedom has previously held key portfolios including Mines & Solid Minerals
                                and Sanitation/Hygiene, demonstrating his versatility and commitment to public service.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Under his leadership, the Ministry of Special Projects has been instrumental in coordinating and implementing
                                key development initiatives across Imo State. Dr. Emedom&apos;s strategic vision and hands-on approach have been
                                pivotal in ensuring the successful execution of projects that directly impact the lives of Imo State residents,
                                fostering sustainable development and improving infrastructure across the state.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 aspect-[3/4]">
                            <Image
                                src="/photos/Hon. Dr. Elias Emedom.webp"
                                alt="Hon. Dr. Elias Emedom - Honorable Commissioner"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Key Focus Areas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Project Planning */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Strategic Project Planning
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Developing comprehensive project plans that align with the state&apos;s development goals and ensure effective implementation across sectors.
                            </p>
                        </div>

                        {/* Infrastructure Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Infrastructure Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Overseeing the implementation of critical infrastructure projects that enhance the state&apos;s development and improve quality of life.
                            </p>
                        </div>

                        {/* Inter-Ministerial Collaboration */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Inter-Ministerial Collaboration
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Working closely with other ministries to ensure coordinated and integrated development initiatives across the state.
                            </p>
                        </div>

                        {/* Community Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Community Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Implementing projects that directly benefit local communities and contribute to sustainable development.
                            </p>
                        </div>

                        {/* Innovation and Technology */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Innovation and Technology
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Leveraging modern technologies and innovative approaches to enhance project delivery and outcomes.
                            </p>
                        </div>

                        {/* Project Monitoring */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Project Monitoring & Evaluation
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Ensuring all projects meet quality standards, timelines, and deliver intended benefits through rigorous monitoring and evaluation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Objectives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Special Projects is committed to these key objectives to drive development and improve the quality of life in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Implement high-impact infrastructure projects that address critical needs across Imo State.",
                            "Foster community-driven development through participatory project planning and implementation.",
                            "Enhance public infrastructure to support economic growth and improve living standards.",
                            "Promote technology and innovation as drivers of sustainable development.",
                            "Ensure timely and efficient project delivery through effective planning and monitoring.",
                            "Build strong partnerships with development agencies and private sector stakeholders.",
                            "Prioritize projects that create employment opportunities for youth and women.",
                            "Enhance transparency and accountability in project implementation.",
                            "Ensure equitable distribution of development projects across all local government areas.",
                            "Leverage technology to improve service delivery and project outcomes."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet Hon. Dr. Elias Emedom and the dedicated team driving the Ministry of Special Projects&apos; mission to deliver impactful development initiatives across Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Hon. Dr. Elias Emedom.webp"
                                    alt="Hon. Dr. Elias Emedom - Commissioner for Special Projects"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Hon. Dr. Elias Emedom</h3>
                                <p className="text-green-700 font-medium mt-1">Commissioner for Special Projects</p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="aspect-[3.8/4] bg-gray-100 overflow-hidden">
                                <Image
                                    src="/photos/Angela O. John-Njoku(Mrs) Fcai, JP Permanent Secretary(CD)  Ministry Of Special Projects.jpeg"
                                    alt="Permanent Secretary - Ministry of Special Projects"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">[Permanent Secretary&apos;s Name]</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
                                The Ministry of Special Projects is structured to ensure efficient
                                coordination and implementation of special development initiatives across Imo State.
                                Our organizational framework is designed to facilitate seamless project execution,
                                inter-ministerial collaboration, and effective delivery of key infrastructure
                                and development projects that drive progress in the state.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/photos/Structure - Ministry of Special Projects.jpg"
                                alt="Ministry of Special Projects - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:gap-6">
                        {/* Level 1 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">1</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Honourable Commissioner</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Provides overall leadership and strategic direction for special projects</p>
                        </div>

                        {/* Level 2 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">2</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Permanent Secretary</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Oversees administrative operations and ensures effective implementation of special projects</p>
                        </div>

                        {/* Level 3 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">3</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Project Directors</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Lead specialized project teams focusing on infrastructure, community development, and inter-ministerial initiatives</p>
                        </div>

                        {/* Level 4 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">4</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Project Managers</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Oversee day-to-day execution of special projects, ensuring quality and timely delivery</p>
                        </div>

                        {/* Level 5 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">5</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Technical Specialists</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Provide expert knowledge in various fields to support project planning and implementation</p>
                        </div>

                        {/* Level 6 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">6</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Field Officers</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Execute on-ground project activities and maintain community engagement</p>
                        </div>

                        {/* Level 7 */}
                        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                <span className="text-white font-bold text-sm sm:text-base">7</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold mb-2">Administrative & Support Staff</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Provide essential operational, financial, and logistical support for project implementation</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
