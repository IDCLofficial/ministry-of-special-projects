import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";

// Special Projects
const SPECIAL_PROJECTS = [
    {
        number: 1,
        title: "World Bank-Supported Community & Social Development Projects (CSDP)",
        description: "Empowering communities to identify, prioritize, and implement micro-projects that address their specific needs in areas such as education, healthcare, water supply, and rural infrastructure.",
        location: "Statewide",
        category: "Community Development",
        status: "In Progress",
        partners: "World Bank, Local Communities"
    },
    {
        number: 2,
        title: "Light Up Imo Project",
        description: "A comprehensive rural electrification and street lighting initiative designed to improve public safety, extend productive hours for businesses, and enhance the overall quality of life in communities across Imo State.",
        location: "Statewide",
        category: "Infrastructure",
        status: "In Progress",
        partners: "State Government, Local Contractors"
    },
    {
        number: 3,
        title: "Road Infrastructure and Anti-Flood Projects",
        description: "Focused on the construction, rehabilitation, and maintenance of critical road networks while implementing flood control measures across Imo State to improve transportation efficiency and protect communities.",
        location: "Various LGAs",
        category: "Infrastructure",
        status: "In Progress",
        partners: "State Government, Federal Ministry of Works"
    },
    {
        number: 4,
        title: "Imo Digital City",
        description: "Transforming Imo State into a technology and innovation hub through digital infrastructure development, tech entrepreneurship promotion, and digital skills training for youth and businesses.",
        location: "Owerri",
        category: "Technology & Innovation",
        status: "In Progress",
        partners: "Tech Companies, Educational Institutions"
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Projects</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Special Projects is dedicated to implementing high-impact initiatives that drive development 
                            and improve the quality of life for residents across Imo State. Our projects focus on infrastructure, 
                            community development, and technological advancement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SPECIAL_PROJECTS.map((project, index) => {
                            // const IconComponent = PROJECT_ICONS[project.number as keyof typeof PROJECT_ICONS];
                            return (
                                <AnimatedEntrance 
                                    key={project.number} 
                                    {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                    delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                                >
                                    <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src={'/assets/no-image-lg.jpg'}
                                                alt={project.title}
                                                width={400}
                                                height={200}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                {project.title}
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Category</span>
                                                    <span className="text-gray-900 text-right">{project.category}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Status</span>
                                                    <span className={`font-medium text-right ${
                                                        project.status === "Active" ? "text-blue-600" :
                                                        project.status === "In Progress" ? "text-yellow-600" :
                                                        project.status === "Completed" ? "text-green-600" :
                                                        project.status === "Ongoing" ? "text-orange-600" : ""
                                                    }`}>{project.status}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Partners</span>
                                                    <span className="text-gray-900 text-right">{project.partners}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center mt-4 text-green-600 text-sm">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            );
                        })}
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
        </div>
    );
}
