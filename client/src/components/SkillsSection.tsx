import { useState } from "react";
import branding from "../assets/branding.webp";
import codeEditing_icon from "../assets/codeEditing_icon.svg"
import api_integration_icon from "../assets/api_integration_icon.svg";
import HOSTING_ICON from "../assets/HOSTING_ICON.svg";
import WabsiteMaintaince_icon from "../assets/WabsiteMaintaince_icon.svg";
import reponsive_icon from "../assets/reponsive_icon.svg";
import CMSintegration_icon from "../assets/CMSintegration_icon.svg";
import wireframe_icon from "../assets/wireframe_icon.svg";
import ux_icon from "../assets/ux_icon.svg";
import mockups_icon from "../assets/mockups_icon.svg";
import prototyping_icon from "../assets/prototyping_icon.svg";
import sitemaps_icon from "../assets/sitemaps_icon.svg";
import typography_icon from "../assets/typography_icon.svg";
import assetcreaion_icon from "../assets/assetcreaion_icon.svg";
import logoCreation_icon from "../assets/logoCreation_icon.svg";
import brandguidelines_icon from "../assets/brandguidelines_icon.svg";
import seoAudit_icon from "../assets/seoAudit_icon.svg";
import contentAstrategy_icon from "../assets/contentAstrategy_icon.svg";
import keywordsResarch_icon from "../assets/keywordsResarch_icon.svg";
import linkbuilding_icon from "../assets/linkbuilding_icon.svg";
import optimization_icon from "../assets/optimization_icon.svg";
import schemaMarkup_icon from "../assets/schemaMarkup_icon.svg";
import socialMedia_icon from "../assets/socialMedia_icon.svg";
import videoMarketing_icon from "../assets/videoMarketing_icon.svg";
import analytics_icon from "../assets/analytics_icon.svg";
import capaignManagement_icon from "../assets/capaignManagement_icon.svg";
import contentCreation_icon from "../assets/contentCreation_icon.svg";
import googleAds_icon from "../assets/googleAds_icon.svg";
import webDevelopment from "../assets/webDevelopment.webp";
import webDesign from "../assets/webDesign.webp";
import digitalMarketing from "../assets/digitalMarketing.webp";
import "@/styles/FadeIn.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface SlideData {
  id: number;
  title: string;
  image: string;
  href: string;
  description: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
}

const SkillsSection = () => {
  const fadeInRef = useIntersectionObserver();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: SlideData[] = [
    {
      id: 1,
      title: "עיצוב אתרים",
      image: webDesign,
      href: "/web-design",
      description: "אני תמיד שם דגש על יצירת חוויות משתמש איכותית. אני מעצב אתרים מודרניים ונוחים לשימוש - מתכנון ראשוני, דרך Prototyping, ועד לפרטים הקטנים כמו פונטים. המטרה? שהממשק יהיה יפה, קל ויתאים בול לצרכים שלכם.",
      features: [
        { icon: wireframe_icon, text: "Wireframe" },
        { icon: sitemaps_icon, text: "Sitemaps" },
        { icon: typography_icon, text: "טיפוגרפיה" },
        { icon: prototyping_icon, text: "Prototyping" },
        { icon: ux_icon, text: "UI/UX" },
        { icon: mockups_icon, text: "Mockups" }
      ]
    },
    {
      id: 2,
      title: "פיתוח אתרים",
      image: webDevelopment,
      href: "/web-development",
      description: "בין אם אתם צריכים אתר תדמית מרשים או מערכת ניהול מורכבת - אני מביא איתי ידע עמוק ושליטה בטכנולוגיות הכי חדשניות, כדי לייצר לכם חוויות דיגיטליות שלא רק נראות נהדר, אלא גם מביאות תוצאות.",
      features: [
        { icon: codeEditing_icon, text: "פיתוח בקוד" },
        { icon: CMSintegration_icon, text: "אינטגרצית CMS" },
        { icon: reponsive_icon, text: "ריספונסיביות" },
        { icon: HOSTING_ICON, text: "אחסון אתרים" },
        { icon: api_integration_icon, text: "אינטגרצית API" },
        { icon: WabsiteMaintaince_icon, text: "תחזוקת אתרים" }
      ]
    },
    {
      id: 3,
      title: "מיתוג",
      image: branding,
      href: "/branding",
      description: "כדי שזהות העסק שלכם תהיה בלתי נשכחת, אצור עבורכם מיתוג מנצח. אני אבנה את המותג שלכם מהיסוד - מעיצוב לוגו ייחודי, דרך מדריכי מיתוג מסודרים שישמרו על אחידות ויזואלית, ועד לעיצוב כל הנכסים הדיגיטליים שישקפו את הסיפור שלכם.",
      features: [
        { icon: logoCreation_icon, text: "עיצוב לוגו" },
        { icon: brandguidelines_icon, text: "מדריכי מיתוג" },
        { icon: assetcreaion_icon, text: "יצירת נכסים דיגיטליים" },
        { icon: typography_icon, text: "טיפוגרפיה" }
      ]
    },
    {
      id: 4,
      title: "קידום אתרים",
      image: "https://cdn.prod.website-files.com/671637dedb791904db049377/67c8667441f4c28f3db50371_Search%20engine%20with%20magnifying%20glass%20ready%20to%20search%20the%20World%20Wide%20Web.avif",
      href: "/seo",
      description: "עם קידום אתרים חכם, אדאג שהאתר שלכם ידורג גבוה בתוצאות החיפוש,  המטרה היא להביא אליכם יותר לקוחות רלוונטיים, להגדיל את התנועה לאתר ולבנות את הנוכחות הדיגיטלית שלכם בצורה חזקה ויציבה.",
      features: [
        { icon: keywordsResarch_icon, text: "מחקר מילות מפתח" },
        { icon: seoAudit_icon, text: "SEO Audit" },
        { icon: optimization_icon, text: "אופטימיזציה" },
        { icon: linkbuilding_icon, text: "בניית קישורים" },
        { icon: contentAstrategy_icon, text: "אסטרטגיית תוכן" },
        { icon: schemaMarkup_icon, text: "בניית סכמות" }
      ]
    },
    {
      id: 5,
      title: "שיווק דיגיטלי",
      image: digitalMarketing,
      href: "/digital-marketing",
      description: "כדי שתהיו חזקים בזירה הדיגיטלית, אבנה עבורכם אסטרטגיה שתכלול את כל הכלים החשובים: יצירת תוכן מעולה שמושך את העין, ניהול קמפיינים ממומנים, וכמובן - מעקב צמוד וניתוח נתונים כדי לוודא שאנחנו תמיד על המסלול הנכון.",
      features: [
        { icon: googleAds_icon, text: "גוגל אדס" },
        { icon: contentCreation_icon, text: "יצירת תוכן" },
        { icon: socialMedia_icon, text: "רשתות חברתיות" },
        { icon: videoMarketing_icon, text: "שיווק בוידאו" },
        { icon: analytics_icon, text: "אנליטיקס" },
        { icon: capaignManagement_icon, text: "ניהול קמפיינים" }
      ]
    }
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const formatSlideNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section id="skills" ref={fadeInRef} className="min-h-screen bg-black relative text-white fade-in">
      {/* Counter Section - Top Center on mobile/tablet, Left on desktop */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-6 md:left-1/2 md:transform md:-translate-x-1/2 lg:top-16 lg:left-16 lg:transform-none z-10">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          <h2 className="text-xl md:text-2xl lg:text-6xl font-light text-white">
            {formatSlideNumber(currentSlide + 1)}
          </h2>
          <span className="text-xl md:text-2xl lg:text-6xl font-light text-gray-400">/</span>
          <h2 className="text-xl md:text-2xl lg:text-6xl font-light text-gray-400">
            {formatSlideNumber(slides.length)}
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Right Side - Image (First on mobile/tablet) */}
        <div className="w-full lg:w-1/2 relative p-6 pt-16 md:p-8 md:pt-20 lg:pl-16 lg:pr-8 lg:pt-40 lg:pb-24 xl:pl-20 lg:order-2">
          <div className="aspect-[4/3] max-w-md md:max-w-[624px] mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-lg relative">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${slides.length * 100}%`,
                height: '100%',
                transform: `translateX(${currentSlide * (100 / slides.length)}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0"
                  style={{ 
                    width: `${100 / slides.length}%`,
                    height: '100%'
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Side - Content (Second on mobile/tablet) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start p-6 md:p-8 lg:p-16 lg:order-1">
          <div className={`w-full max-w-lg mx-auto lg:mx-0 relative overflow-hidden transition-opacity duration-400 ease-in-out ${
            isTransitioning ? 'opacity-85' : 'opacity-100'
          }`}>
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(${currentSlide * (100 / slides.length)}%)`
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0 w-full"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <div className="w-full flex flex-col">
                    <h1 className="font-light mb-4 lg:mb-6 text-center lg:text-right">
                      <span className="md:hidden lg:block" style={{ fontSize: '24px' }}>{slide.title}</span>
                      <span className="hidden md:block lg:hidden" style={{ fontSize: '36px' }}>{slide.title}</span>
                    </h1>
                    
                    <p className="text-gray-300 mb-6 lg:mb-8 leading-relaxed text-center lg:text-right">
                      <span className="md:hidden lg:block" style={{ fontSize: '16px' }}>{slide.description}</span>
                      <span className="hidden md:block lg:hidden" style={{ fontSize: '18px' }}>{slide.description}</span>
                    </p>
                    
                    <div className="grid grid-cols-2 grid-rows-3 gap-3 lg:gap-4 text-center lg:text-right mb-6 lg:mb-28 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
                      {Array.from({ length: 6 }, (_, featureIndex) => {
                        const feature = slide.features[featureIndex];
                        return feature ? (
                          <div key={featureIndex} className="flex items-center gap-2 lg:gap-3 justify-center lg:justify-end flex-row-reverse">
                            <span className="text-gray-300">
                              <span className="md:hidden lg:block" style={{ fontSize: '16px' }}>{feature.text}</span>
                              <span className="hidden md:block lg:hidden" style={{ fontSize: '18px' }}>{feature.text}</span>
                            </span>
                            <div className="flex items-center justify-center">
                              <div className="md:hidden lg:block" style={{ width: '20px', height: '20px' }}>
                                <img src={feature.icon} alt={feature.text} style={{ width: '20px', height: '20px' }} />
                              </div>
                              <div className="hidden md:block lg:hidden" style={{ width: '24px', height: '24px' }}>
                                <img src={feature.icon} alt={feature.text} style={{ width: '24px', height: '24px' }} />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div key={featureIndex} className="invisible"></div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons - Below the grid */}
            <div className="flex gap-3 lg:gap-4 justify-center lg:justify-end flex-row-reverse w-full">
              <button
                onClick={nextSlide}
                aria-label="next slide"
                className="relative border border-gray-600 bg-transparent hover:bg-white hover:border-white transition-all duration-300 group"
                style={{ width: '52px', height: '52px' }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="absolute inset-0 m-auto text-white group-hover:text-black transition-colors duration-300"
                >
                  <path 
                    d="M15 18L9 12L15 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={prevSlide}
                aria-label="previous slide"
                className="relative border border-gray-600 bg-transparent hover:bg-white hover:border-white transition-all duration-300 group"
                style={{ width: '52px', height: '52px' }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="absolute inset-0 m-auto text-white group-hover:text-black transition-colors duration-300"
                >
                  <path 
                    d="M9 18L15 12L9 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
