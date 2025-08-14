import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: 'url("/hero_section.png")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Ministry of Special Projects<br />
                                Departments and Initiatives
                            </h1>
                        </AnimatedEntrance>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Key Initiatives"
                tabs={[
                    {
                        id: "csdp",
                        label: "Community & Social Development",
                        content: {
                            title: "World Bank-Supported Community & Social Development Projects (CSDP)",
                            imageSrc: "/photos/Photo - World Bank-Supported Community & Social Development Projects (CSDP).jpg",
                            imageAlt: "Community & Social Development Projects",
                            description: "The Community & Social Development Project (CSDP) is a World Bank-supported initiative aimed at improving access to services for human development. This initiative focuses on empowering communities to identify, prioritize, and implement micro-projects that address their specific needs in areas such as education, healthcare, water supply, and rural infrastructure. The Ministry of Special Projects coordinates with local communities to ensure sustainable development and improved quality of life for residents across Imo State."
                        }
                    },
                    {
                        id: "light-up",
                        label: "Light Up Imo",
                        content: {
                            title: "Light Up Imo Project",
                            imageSrc: "/photos/Photo - Light Up Imo Project.jpg",
                            imageAlt: "Light Up Imo Project",
                            description: "The Light Up Imo Project is a comprehensive rural electrification and street lighting initiative designed to improve public safety, extend productive hours for businesses, and enhance the overall quality of life in communities across Imo State. This project involves the installation and maintenance of solar-powered street lights in urban and rural areas, ensuring sustainable and reliable lighting solutions that reduce energy costs and environmental impact."
                        }
                    },
                    {
                        id: "infrastructure",
                        label: "Road Infrastructure",
                        content: {
                            title: "Road Infrastructure and Anti-Flood Projects",
                            imageSrc: "/photos/Photo - Ministry of Special Projects.jpg",
                            imageAlt: "Road Infrastructure Development",
                            description: "The Road Infrastructure and Anti-Flood Projects focus on the construction, rehabilitation, and maintenance of critical road networks while implementing flood control measures across Imo State. These projects aim to improve transportation efficiency, boost economic activities, and protect communities from flood-related disasters. The Ministry works closely with engineering experts and local communities to ensure that infrastructure development is sustainable and meets the needs of the people."
                        }
                    },
                    {
                        id: "digital-city",
                        label: "Digital City Initiative",
                        content: {
                            title: "Imo Digital City",
                            imageSrc: "/photos/Photo - Imo Digital City.jpg",
                            imageAlt: "Imo Digital City Initiative",
                            description: "The Imo Digital City initiative represents our commitment to transforming Imo State into a technology and innovation hub. This project focuses on creating digital infrastructure, promoting tech entrepreneurship, and providing digital skills training for youth and businesses. By fostering innovation and digital inclusion, the Ministry of Special Projects aims to position Imo State as a leader in the digital economy, creating employment opportunities and driving sustainable development."
                        }
                    },
                    {
                        id: "donor-collaborations",
                        label: "Donor Collaborations",
                        content: {
                            title: "Strategic Partnerships and Donor Collaborations",
                            imageSrc: "/photos/Photo - Strategic Partnerships and Donor Collaborations.jpg",
                            imageAlt: "Donor Collaborations",
                            description: "The Ministry of Special Projects collaborates with various international development partners and donor agencies to implement impactful projects across Imo State. Our key partners include the United States Agency for International Development (USAID), World Bank, Niger Delta Development Commission (NDDC), and Nigerian Capital Development Fund (NCDF). These strategic partnerships enable us to leverage resources, expertise, and funding to deliver sustainable development projects that improve the lives of Imo State residents."
                        }
                    }
                ]}
            />
        </div>
    );
}
