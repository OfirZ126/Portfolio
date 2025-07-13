import { useState } from "react";
import { Link } from "react-router-dom";
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



const SkillsSection = () => {
  const fadeInRef = useIntersectionObserver();
  // Cards data - creating 5 cards as requested
  const slides = [
    {
      id: 1,
      title: "בניית אתרים",
      image: webDevelopment,
      description: "בין אם אתם צריכים אתר תדמית מרשים או מערכת ניהול מורכבת - אני מביא איתי ידע עמוק ושליטה בטכנולוגיות הכי חדשניות, כדי לייצר לכם חוויות דיגיטליות שלא רק נראות נהדר, אלא גם מביאות תוצאות.",
      link: "/web-development",
      icons: [
        { icon: codeEditing_icon, text: "פיתוח בקוד" },
        { icon: CMSintegration_icon, text: "אינטגרצית CMS" },
        { icon: reponsive_icon, text: "ריספונסיביות" },
        { icon: HOSTING_ICON, text: "אחסון אתרים" },
        { icon: api_integration_icon, text: "אינטגרצית API" },
        { icon: WabsiteMaintaince_icon, text: "תחזוקת אתרים " }
      ]
    },
    {
      id: 2,      title: "עיצוב אתרים",
      image: webDesign,
      description: "אני תמיד שם דגש על יצירת חוויות משתמש איכותית. אני מעצב אתרים מודרניים ונוחים לשימוש - מתכנון ראשוני, דרך Prototyping, ועד לפרטים הקטנים כמו פונטים. המטרה? שהממשק יהיה יפה, קל ויתאים בול לצרכים שלכם.",
      link: "/web-design",
      icons: [
        { icon: wireframe_icon, text: "Wireframe" },
        { icon: sitemaps_icon, text: "Sitemaps" },
        { icon: typography_icon, text: " טיפוגרפיה" },
        { icon: prototyping_icon, text: "Prototyping" },
        { icon: ux_icon, text: "UI/UX" },
        { icon: mockups_icon, text: "Mockups" }
      ]
    },
    {
      id: 3,
      title: "מיתוג",
      image: branding,
      description: "כדי שזהות העסק שלכם תהיה בלתי נשכחת, אצור עבורכם מיתוג מנצח. אני אבנה את המותג שלכם מהיסוד - מעיצוב לוגו ייחודי, דרך מדריכי מיתוג מסודרים שישמרו על אחידות ויזואלית, ועד לעיצוב כל הנכסים הדיגיטליים שישקפו את הסיפור שלכם.",
      link: "/branding",
      icons: [
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
      description: "עם קידום אתרים חכם, אדאג שהאתר שלכם ידורג גבוה בתוצאות החיפוש,  המטרה היא להביא אליכם יותר לקוחות רלוונטיים, להגדיל את התנועה לאתר ולבנות את הנוכחות הדיגיטלית שלכם בצורה חזקה ויציבה. ",
      link: "/seo",
      icons: [
        { icon: keywordsResarch_icon, text: "מחקר מילות מפתח  " },
        { icon: seoAudit_icon, text: "SEO Audit" },
        { icon: optimization_icon, text: "אופטימיזציה " },
        { icon: linkbuilding_icon, text: "בניית קישורים" },
        { icon: contentAstrategy_icon, text: "אסטרטגיית תוכן" },
        { icon: schemaMarkup_icon, text: "בניית סכמות" }
      ]
    },
    {
      id: 5,
      title: "שיווק דיגיטלי",
      image: digitalMarketing,
      description: " כדי שתהיו חזקים בזירה הדיגיטלית, אבנה עבורכם אסטרטגיה שתכלול את כל הכלים החשובים: יצירת תוכן מעולה שמושך את העין, ניהול קמפיינים ממומנים, וכמובן - מעקב צמוד וניתוח נתונים כדי לוודא שאנחנו תמיד על המסלול הנכון.",
      link: "/digital-marketing",
      icons: [
        { icon: googleAds_icon, text: "גוגל אדס" },
        { icon: contentCreation_icon, text: "יצירת תוכן" },
        { icon: socialMedia_icon, text: "רשתות חברתיות" },
        { icon: videoMarketing_icon, text: "שיווק בוידאו" },
        { icon: analytics_icon, text: "אנליטיקס" },
        { icon: capaignManagement_icon, text: "ניהול קמפיינים" }
      ]
    }
  ];
  
  const [current, setCurrent] = useState(0);
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const slide = slides[current];
  
  // Format slide number with leading zero
  const formatSlideNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section id="skills" ref={fadeInRef} className="py-12 fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        {/* Desktop Counter: Visually Top-Left */}
        <div className="hidden lg:flex justify-start mb-8" dir="ltr">
          <div className="flex items-baseline text-4xl font-bold">
            <span className="text-[#666666]">{formatSlideNumber(slides.length)}</span>
            <span className="text-white mx-2">/</span>
            <span className="text-white">{formatSlideNumber(current + 1)}</span>
          </div>
        </div>

        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row md:items-start lg:items-center md:gap-8 lg:gap-6">
          
          {/* Image Column */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2 relative">
            <div 
              className="block relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[480px] overflow-hidden transition-transform duration-500 hover:scale-[1.02] rounded-[15px] sm:rounded-[20px] md:rounded-[30px]"
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Mobile/Tablet Navigation Controls */}
            <div className="flex flex-col items-center gap-4 mt-4 sm:mt-6 lg:hidden">
              {/* Counter */}
              <div className="flex items-center justify-center space-x-4">
                <div className="count-column flex items-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {formatSlideNumber(current + 1)}
                  </h2>
                  <span className="mx-2 text-gray-600">/</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-500">
                    {formatSlideNumber(slides.length)}
                  </h2>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-center space-x-3 sm:space-x-4">
                <button 
                  onClick={prevSlide} 
                  className="relative w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 text-white hover:bg-gray-800 transition-colors flex items-center justify-center rounded-md"
                  aria-label="previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={nextSlide} 
                  className="relative w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 text-white hover:bg-gray-800 transition-colors flex items-center justify-center rounded-md"
                  aria-label="next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Text & Navigation Column */}
          <div className="w-full lg:w-1/3 lg:text-right text-center flex flex-col justify-between order-2 lg:order-1 mt-6 md:mt-8 lg:mt-0">
            <div className="flex flex-col lg:items-end items-center md:max-w-2xl lg:max-w-none mx-auto" style={{ minHeight: '366px' }}>
              <div className="w-full mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl text-white font-bold mb-4 md:mb-6">
                  {slide.title}
                </h3>
                <p className="text-[1rem] md:text-[1.125rem] text-gray-300 leading-relaxed md:line-clamp-none lg:line-clamp-5">
                  {slide.description}
                </p>
              </div>
              
              {/* Icons grid */}
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4 justify-items-center lg:justify-items-start">
                  {slide.icons.map((item, index) => (
                    <div key={index} className="flex items-center lg:justify-end justify-center gap-2 text-white w-full">
                      <img src={item.icon} alt={item.text} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                      <span className="text-sm md:text-base whitespace-nowrap">{item.text}</span>
                    </div>
                  ))}
                  {/* For branding slide: add a third invisible row for height consistency */}
                  {slide.id === 3 && (
                    <>
                      {slide.icons.slice(0, 2).map((item, idx) => (
                        <div key={`branding-fake-${idx}`} className="flex items-center md:justify-end justify-center gap-2 opacity-0 select-none pointer-events-none h-10 md:h-14">
                          <img src={item.icon} alt={item.text} className="w-6 h-6 md:w-10 md:h-10" />
                          <span className="text-sm whitespace-nowrap">{item.text}</span>
                        </div>
                      ))}
                    </>
                  )}
                  {/* Invisible icons for other slides to keep grid height consistent */}
                  {slide.id !== 3 && Array.from({ length: Math.max(0, 6 - slide.icons.length) }).map((_, idx) => (
                    <div key={`empty-${idx}`} className="flex items-center md:justify-end justify-center gap-2 opacity-0 select-none pointer-events-none h-10 md:h-14">
                      <img src={slide.icons[0]?.icon || ''} alt="" className="w-6 h-6 md:w-10 md:h-10" />
                      <span className="text-sm whitespace-nowrap">&nbsp;</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden lg:flex lg:justify-center mt-12">
              <div className="flex gap-3">
                <button 
                  onClick={prevSlide} 
                  className="w-12 h-12 border border-[#333] bg-transparent hover:bg-[#111] transition-colors flex items-center justify-center rounded-md"
                  aria-label="previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={nextSlide} 
                  className="w-12 h-12 border border-[#333] bg-transparent hover:bg-[#111] transition-colors flex items-center justify-center rounded-md"
                  aria-label="next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
