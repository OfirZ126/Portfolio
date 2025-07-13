import { useState } from "react";
import { Section } from "./section.js";
import { cn } from "@/lib/utils";
import { projects as portfolioProjects } from "@/data/portfolioData";
import { useNavigate } from "react-router-dom";
import "@/styles/FadeIn.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ux_icon from "./uxIcon";
import googleAdsIcon from "@/assets/googleAds_icon.svg";
import capaignManagement_icon from "@/assets/capaignManagement_icon.svg";
import brandguidelinesIcon from "@/assets/brandguidelines_icon.svg";
import wireframe_icon from "@/assets/wireframe_icon.svg";

import KnowledgeCenterImg from "../assets/KnowledgeCenter.webp";
import DocsPelecardImg from "../assets/DocsPelecard.webp";
import PosManagementAppImg from "../assets/pos-managementApp.png";
import { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent } from "@/components/ui/reveal-on-hover";
import "./Portfolio.css";

type Category = 'all' | 'webDev' | 'webDesign' | 'branding' | 'seo' | 'digitalMarketing';

interface CategoryInfo {
  id: Category;
  label: string;
  icon: JSX.Element;
}

const categories: CategoryInfo[] = [
  {
    id: 'all',
    label: 'הכל',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
      </svg>
    )
  },
  {
    id: 'webDev',
    label: 'בניית אתרים',
    icon: (
      <img src={wireframe_icon} alt="Wireframe Icon" className="w-5 h-5 md:w-6 md:h-6" />
    )
  },
  {
    id: 'webDesign',
    label: 'עיצוב אתרים',
    icon: (
      <img src={ux_icon} alt="UX Icon" className="w-5 h-5 md:w-6 md:h-6" />
    )
  },
  {
    id: 'branding',
    label: 'מיתוג',
    icon: (
      <img src={brandguidelinesIcon} alt="Brand Guidelines Icon" className="w-5 h-5 md:w-6 md:h-6" />
    )
  },
  {
    id: 'seo',
    label: 'קידום אתרים',
    icon: (
      <img src={googleAdsIcon} alt="Google Ads Icon" className="w-5 h-5 md:w-6 md:h-6" />
    )
  },
  {
    id: 'digitalMarketing',
    label: 'שיווק דיגיטלי',
    icon: (
      <img src={capaignManagement_icon} alt="Campaign Management Icon" className="w-5 h-5 md:w-6 md:h-6" />
    )
  }
];

// Extend the Project type with categories
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: Category[];
  client: string;
  link: string;
}

// Convert and extend the existing projects data
const projects: Project[] = portfolioProjects.map(project => ({
  id: project.id,
  title: project.title,
  description: project.description,
  image: project.imageUrl,
  categories: project.categories,
  client: project.role || "לא צוין",
  link: project.demoUrl || project.githubUrl || "#"
}));

export function Portfolio() {
  const fadeInRef = useIntersectionObserver();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(selectedCategory));

  const handleProjectClick = (projectId: number) => {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (project) {
      navigate(`/project/${project.slug}`);
    }
  };

  return (    <Section ref={fadeInRef} id="projects" className="py-12 fade-in">
      <div className="container mx-auto px-4" dir="rtl">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">הפרויקטים שלי</h2>
          <p className="text-[1rem] md:text-[1.125rem] text-gray-300 leading-relaxed">
            כאן תוכלו לראות את המגוון הרחב של העבודות שלי, שמדגימות את היכולות והניסיון שצברתי. בכל פרויקט תמצאו את הדגש שלי על עיצוב ברמה גבוהה, יישום טכנולוגיות חדשניות והחתירה לתוצאות אמיתיות בשטח.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "category-btn inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-200 bg-black text-white border-0 focus:outline-none focus:ring-0 active:ring-0 active:outline-none",
                "hover:bg-primary/20 hover:text-white hover:shadow-md hover:scale-105",
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg border-0"
                  : "bg-black text-white border-0"
              )}
            >
              {category.icon}
              <span className="mr-1.5 sm:mr-2">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-black rounded-xl p-4">
          {filteredProjects.map((project) => {
            const isTripy = project.title.toLowerCase() === "tripy" || project.link.includes("tripy");
            return (
              <CardHoverReveal
                key={project.id}
                className="rounded-lg bg-secondary/50 cursor-pointer shadow-lg min-h-[240px] relative"
                onClick={() => {
                  if (!isTripy) handleProjectClick(project.id);
                }}
                style={{ minHeight: 240, pointerEvents: isTripy ? 'none' : 'auto' }}
              >
                <CardHoverRevealMain className="aspect-[16/9] w-full overflow-hidden relative">
                  <img
                    src={
                      project.title === "מערכת לניהול מלאי מכשירי סליקה"
                        ? PosManagementAppImg
                        : project.title === "Docs.pelecard"
                          ? DocsPelecardImg
                          : project.image
                    }
                    alt={project.title}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  {isTripy && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/70 z-10"
                      style={{ pointerEvents: 'auto', direction: 'ltr', textAlign: 'center' }}
                    >
                      <span className="text-2xl font-bold text-white drop-shadow-lg" style={{ direction: 'ltr', textAlign: 'center' }}>
                        COMING SOON!
                      </span>
                    </div>
                  )}
                </CardHoverRevealMain>
                <CardHoverRevealContent className="flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-lg transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                  <p className="text-sm text-white/90 line-clamp-3 drop-shadow-md">{project.description}</p>
                </CardHoverRevealContent>
              </CardHoverReveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}