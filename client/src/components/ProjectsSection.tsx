import { projects } from "@/data/portfolioData";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsSection = () => {
  const navigate = useNavigate();
  
  const handleProjectClick = (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      navigate(`/project/${project.slug}`);
    }
  };

  return (    <section id="featured-projects" className="py-12">
      <h2 className="text-white text-2xl font-bold mb-6 text-right" dir="rtl">פרויקטים נבחרים</h2>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (              <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">                <div
                  className="group bg-cover bg-center flex flex-col rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full relative"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/75 p-6 transition-all duration-300"
                    >
                      <div className="h-full flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-sm text-white/90 line-clamp-3">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 border-0" />
            <CarouselNext className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 border-0" />
          </div>
        </Carousel>
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="text-xs text-white/60">החלק לצפייה בפרויקטים נוספים</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
