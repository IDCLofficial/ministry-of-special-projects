import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaLightbulb, FaRoad, FaCity, FaHandsHolding } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>
        <Link href="/about">
          <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Learn About Us
          </button>
        </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
              <Image
                src="/assets/no-image.png"
                alt="Ministry of Special Projects initiatives"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  About the Ministry of Special Projects
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The Imo State Ministry of Special Projects is dedicated to implementing high-impact initiatives that drive development and improve the quality of life for residents across the state. Through strategic planning, innovative solutions, and effective project management, we deliver critical infrastructure and community development projects that support the state&apos;s growth and prosperity.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <Link href="/about">
                  <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer w-fit text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                    Learn more about us
                  </button>
                </Link>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Welcome from the Honorable Commissioner
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  As the Honorable Commissioner for Special Projects, I am honored to lead a team dedicated to delivering transformative initiatives that drive development across Imo State. Our ministry is committed to implementing high-impact projects that address critical infrastructure needs and improve the quality of life for our citizens.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  From the Light Up Imo Project to our community development initiatives, we are working tirelessly to ensure that every project we undertake brings tangible benefits to the people of Imo State. We believe in transparency, accountability, and community participation in all our endeavors.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Hon. Dr. Elias Emedom is a seasoned public servant in Imo State, currently serving as Commissioner for Special Projects, where he is central to driving critical infrastructure and development initiatives. He has also held portfolios in Mines & Solid Minerals and Sanitation/Hygiene, demonstrating experience across diverse sectors of governance.
                </p>
              </AnimatedEntrance>
              {/* <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                  Read Full Bio
                </button>
              </AnimatedEntrance> */}
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                <Image
                  src="/assets/no-image.png"
                  alt="Hon. Dr. Elias Emedom - Honourable Commissioner for Special Projects"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our Key Projects
            </h2>
          </AnimatedEntrance>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaLightbulb size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Light Up Imo</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">Providing sustainable energy solutions to rural communities</p>
                <Link href="/projects#light-up-imo" className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</Link>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaRoad size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Road Infrastructure</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Modernizing road networks for better connectivity
                </p>
                <Link href="/projects#road-infrastructure" className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</Link>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaCity size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">Urban Renewal</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Transforming urban spaces for better living
                </p>
                <Link href="/projects#urban-renewal" className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</Link>
              </div>
            </AnimatedEntrance>
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <FaHandsHolding size="2em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base md:text-xl lg:text-2xl">CSDP</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 leading-tight">
                  Community & Social Development Projects
                </p>
                <Link href="/projects#csdp" className="text-green-500 font-medium text-xs sm:text-sm hover:text-green-600 transition-colors">Learn More</Link>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Environmental Partners Section */}
      <section className="py-8 sm:py-12 md:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/pattern.svg"
            alt="Environmental Pattern"
            width={1440}
            height={280}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 sm:px-6 lg:px-20 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
              Environmental Partners
            </h2>
          </AnimatedEntrance>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <AnimatedEntrance key={item} {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.FAST[index] || STAGGER_DELAYS.FAST[5]}>
                <div className="text-center hover:transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Image 
                      src="/assets/no-image.png"
                      alt={`Environmental Partner ${item}`}
                      width={100}
                      height={60}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </AnimatedEntrance>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
