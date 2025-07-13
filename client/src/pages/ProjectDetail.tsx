import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects, Project } from "@/data/portfolioData";
import { ArrowRight, Globe, Github, X } from "lucide-react";
import * as React from "react";
import { Modal } from "@/components/ui/modal";
import "@/styles/FadeIn.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useIsMobile } from "@/hooks/use-mobile";
import "@/styles/project-tool-icons.css";
import knowledgeCenterImg from "@/assets/KnowledgeCenter.webp";
import knowledgeBaseImg from "@/assets/KnowledgeBase.jpg";
import pelecardWebsiteImg from "@/assets/pelecard-website.webp";
import docsPelecardImg from "@/assets/DocsPelecard.webp";
import pelecardWebsiteImgOriginal from "@/assets/PelecardWebsite.webp";
import pelecardDocsImg from "@/assets/PelecardDocs.webp";
import posImg from "@/assets/Pos.webp";
import posManagementAppImg from "@/assets/pos-managementApp.png";
import brandingPelecardImg from "@/assets/brandingPelecard.webp";
import socialPelecardImg from "@/assets/socialPelecard.webp";

const ProjectDetail = () => {
  const fadeInRef = useIntersectionObserver();
  const navigate = useNavigate();
  const params = useParams();
  const isMobile = useIsMobile();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [imageScale, setImageScale] = React.useState(1);
  const [dragPosition, setDragPosition] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
  const [lightboxPosition, setLightboxPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentProject = projects.find((p) => p.slug === params.slug);
    if (currentProject) {
      setProject(currentProject);
      // Set document title
      document.title = `${currentProject.title} | פורטפוליו אופיר זנגי`;
    } else {
      // Redirect to 404 if project not found
      navigate("/not-found");
    }
  }, [params.slug, navigate]);

  const goBack = () => {
    navigate("/");
  };

  const handleImageClick = (imageUrl: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    // Always center the lightbox in the current viewport (what user sees)
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    
    // Store the position for the lightbox (viewport coordinates)
    setLightboxPosition({ x: viewportCenterX, y: viewportCenterY });
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setDragPosition({ x: 0, y: 0 });
    setImageScale(1);
    setLightboxPosition({ x: 0, y: 0 });
  };

  // Mouse drag handlers with bounds checking
  const handleMouseDown = (e: React.MouseEvent) => {
    if (imageScale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - dragPosition.x, y: e.clientY - dragPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && imageScale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Calculate bounds based on scale
      const container = e.currentTarget as HTMLElement;
      const containerRect = container.getBoundingClientRect();
      const scaledWidth = containerRect.width * imageScale;
      const scaledHeight = containerRect.height * imageScale;
      
      // Calculate max drag distance
      const maxDragX = Math.max(0, (scaledWidth - containerRect.width) / 2);
      const maxDragY = Math.max(0, (scaledHeight - containerRect.height) / 2);
      
      // Constrain the position
      const constrainedX = Math.max(-maxDragX, Math.min(maxDragX, newX));
      const constrainedY = Math.max(-maxDragY, Math.min(maxDragY, newY));
      
      setDragPosition({ x: constrainedX, y: constrainedY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset zoom and position when modal closes or image changes
  React.useEffect(() => {
    if (!selectedImage) {
      setImageScale(1);
      setDragPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [selectedImage]);

  // Prevent body scroll when lightbox is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="container mx-auto py-20 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">טוען...</div>
      </div>
    );
  }

  return (
    <div ref={fadeInRef} className="relative min-h-screen bg-black text-white py-10 fade-in">{/* Added relative positioning */}
      {/* Wrapper for button with max width and left alignment */}
      <div className="mx-auto max-w-[1216px] w-full flex justify-center md:justify-start">
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-white mb-8 hover:text-gray-300 transition-colors"
        >
          <ArrowRight size={20} />
          <span>חזרה לדף הבית</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-12 items-center justify-center place-items-center mx-auto max-w-[1216px] px-4 md:px-0">
        {/* Right Column - Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center text-center mx-auto justify-self-center" style={{maxWidth:1216}}>
          {/* Move Title Above Image */}
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 text-center">
            {project.title}
          </h1>

          {/* Mockup Image - Below Title */}
          <div className="w-full flex flex-col items-center mb-6">
            <button
              type="button"
              onClick={(e) => handleImageClick(
                project.slug === "knowledge-center"
                  ? knowledgeCenterImg
                  : project.slug === "Docs.pelecard"
                    ? docsPelecardImg
                    : project.slug === "pos-management"
                      ? posManagementAppImg
                      : pelecardWebsiteImg,
                e
              )}
              style={{ padding: 0, background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
            >
              <img
                src={
                  project.slug === "knowledge-center"
                    ? knowledgeCenterImg
                    : project.slug === "Docs.pelecard"
                      ? docsPelecardImg
                      : project.slug === "pos-management"
                        ? posManagementAppImg
                        : pelecardWebsiteImg
                }
                alt="Mockup"
                style={{ maxWidth: 1216, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
              />
            </button>
          </div>

          <div className="mb-8 text-center" dir="rtl">
            <h2 className="text-white text-2xl font-bold mb-4">תיאור הפרויקט</h2>
            <p className="text-white/90 text-lg leading-relaxed">{project.fullDescription}</p>
          </div>

          {project.tools && project.tools.length > 0 && (
            <div className="mb-8 text-center" dir="rtl">
              <h2 className="text-white text-2xl font-bold mb-4">כלים בהם השתמשתי</h2>
              <div className="grid grid-cols-2 gap-4 justify-center">
                {project.tools.map((tool, index) => (
                  <div key={index} className="flex items-center gap-3 bg-[#111111] p-4 rounded-lg justify-center">
                    <span className="project-tool-icon">
                      <img src={typeof tool.icon === 'string' ? tool.icon : tool.icon.src} alt={tool.name} className="w-full h-full" />
                    </span>
                    <span className="project-tool-icon-text text-white">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-8 text-center" dir="rtl">
              <h2 className="text-white text-2xl font-bold mb-4">טכנולוגיות</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-[#111111] px-3 py-1 rounded-lg text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.challengeTitle && (
            <>
              {/* Show the image above the challenge section for each project, including knowledge-center */}
              {project.slug === "knowledge-center" ? (
                <div className="w-full flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={(e) => handleImageClick(knowledgeBaseImg, e)}
                    style={{ padding: 0, background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
                  >
                    <img
                      src={knowledgeBaseImg}
                      alt="Challenge related"
                      style={{ maxWidth: 1216, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
                    />
                  </button>
                </div>
              ) : project.slug === "Docs.pelecard" ? (
                <div className="w-full flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={(e) => handleImageClick(pelecardDocsImg, e)}
                    style={{ padding: 0, background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
                  >
                    <img
                      src={pelecardDocsImg}
                      alt="Challenge related"
                      style={{ maxWidth: 1216, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
                    />
                  </button>
                </div>
              ) :
                (<div className="w-full flex flex-col items-center mb-4">
                  <button
                    type="button"
                    onClick={(e) => handleImageClick(
                      project.slug === "pos-management"
                        ? posImg
                        : project.slug === "pelecard-website"
                          ? pelecardWebsiteImgOriginal
                          : brandingPelecardImg,
                      e
                    )}
                    style={{ padding: 0, background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
                  >
                    <img
                      src={
                        project.slug === "pos-management"
                          ? posImg
                          : project.slug === "pelecard-website"
                            ? pelecardWebsiteImgOriginal
                            : brandingPelecardImg
                      }
                      alt="Challenge related"
                      style={{ maxWidth: 1216, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
                    />
                  </button>
                </div>)
              }
              <div className="mb-8 text-center" dir="rtl">
                <h2 className="text-white text-2xl font-bold mb-4">{project.challengeTitle}</h2>
                <p className="text-white/90 text-lg leading-relaxed">{project.challengeText}</p>
              </div>
            </>
          )}

          {project.solutionTitle && project.solutionText && (
            <div className="mb-8 text-center" dir="rtl">
              <h2 className="text-white text-2xl font-bold mb-4">{project.solutionTitle}</h2>
              <p className="text-white/90 text-lg leading-relaxed">{project.solutionText}</p>
            </div>
          )}

          {project.resultsTitle || project.resultsText ? (
            <>
              {/* Removed image above the results section as requested */}
              <div className="mb-8 text-center" dir="rtl">
                <h2 className="text-white text-2xl font-bold mb-4">{project.resultsTitle}</h2>
                <p className="text-white/90 text-lg leading-relaxed">{project.resultsText}</p>
              </div>
              {/* Show both images in a row for pelecard-website, otherwise show single image as before */}
              {project.slug === "pelecard-website" ? (
                <div className="w-full flex flex-row gap-6 justify-center items-center mb-8">
                  <button
                    type="button"
                    onClick={(e) => handleImageClick(socialPelecardImg, e)}
                    style={{ padding: 0, background: 'none', border: 'none', width: '50%', cursor: 'pointer' }}
                  >
                    <img
                      src={socialPelecardImg}
                      alt="Project results related"
                      style={{ maxWidth: 600, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
                    />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleImageClick(brandingPelecardImg, e)}
                    style={{ padding: 0, background: 'none', border: 'none', width: '50%', cursor: 'pointer' }}
                  >
                    <img
                      src={brandingPelecardImg}
                      alt="Pelecard branding extra"
                      style={{ maxWidth: 600, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
                    />
                  </button>
                </div>
              ) :
                (!["knowledge-center", "Docs.pelecard", "pos-management"].includes(project.slug) && (
                  <div className="w-full flex flex-col items-center mb-8">
                    <button
                      type="button"
                      onClick={(e) => handleImageClick(socialPelecardImg, e)}
                      style={{ padding: 0, background: 'none', border: 'none', width: '100%', cursor: 'pointer' }}
                    >
                      <img
                        src={socialPelecardImg}
                        alt="Project results related"
                        style={{ maxWidth: 1216, width: '100%', borderRadius: 12, marginTop: 25, marginBottom: 50, cursor: 'pointer' }}
                      />
                    </button>
                  </div>
                ))
              }
            </>
          ) : null}
        </div>

        {/* Left Column - Image */}
        <div className="order-1 lg:order-2 flex flex-col items-center">
          <div className="sticky top-8">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-1">
              {/* Removed Carousel - show single image instead */}
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl overflow-hidden flex items-center justify-center">
                {/* Image removed as requested */}
              </div>
            </div>

            <div className="mt-8 space-y-4 flex flex-col items-center">
              {/* Remove the website view button for pelecard-website */}
              {project.slug !== "pelecard-website" && (project.liveUrl || project.demoUrl) && (
                <a
                  href={project.liveUrl || project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                >
                  <Globe size={18} />
                  <span>צפה באתר</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#333333] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#444444] transition-colors"
                >
                  <Github size={18} />
                  <span>צפה בקוד</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Image Modal */}
      {selectedImage && (
        <Modal 
          isOpen={!!selectedImage} 
          onClose={closeModal} 
          position={lightboxPosition}
          className="max-w-4xl max-h-[80vh] w-[90vw] mx-auto p-0 bg-black border-none rounded-lg overflow-hidden"
        >
          <div 
            className="relative w-full h-full"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/70 rounded-full p-2 hover:bg-black/90 transition-colors z-30"
            >
              <X size={20} />
            </button>
            {/* Zoom controls */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-30">
              <button
                onClick={() => {
                  setImageScale((s) => Math.min(s + 0.2, 3));
                  // Reset drag position when scale changes
                  if (imageScale === 1) setDragPosition({ x: 0, y: 0 });
                }}
                className="bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-colors text-sm font-bold w-8 h-8 flex items-center justify-center"
                aria-label="הגדל"
                type="button"
              >
                +
              </button>
              <button
                onClick={() => {
                  setImageScale((s) => {
                    const newScale = Math.max(s - 0.2, 1);
                    // Reset drag position when reaching scale 1
                    if (newScale === 1) setDragPosition({ x: 0, y: 0 });
                    return newScale;
                  });
                }}
                className="bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition-colors text-sm font-bold w-8 h-8 flex items-center justify-center"
                aria-label="הקטן"
                type="button"
              >
                –
              </button>
            </div>
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                alt="Enlarged project screenshot"
                className={`max-w-full max-h-full object-contain ${imageScale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                style={{ 
                  transform: `scale(${imageScale}) translate(${dragPosition.x / imageScale}px, ${dragPosition.y / imageScale}px)`, 
                  transition: isDragging ? 'none' : 'transform 0.2s ease',
                  transformOrigin: 'center center',
                  userSelect: 'none'
                }}
                draggable={false}
                onMouseDown={handleMouseDown}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProjectDetail;