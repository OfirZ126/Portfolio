import { useEffect } from "react";
import { useLocation } from "wouter";
import "@/styles/FadeIn.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const NotFound = () => {
  const [, setLocation] = useLocation();
  const fadeInRef = useIntersectionObserver();

  useEffect(() => {
    // Set page title
    document.title = "דף לא נמצא | אופיר זנגי";
    // Set body background to black for full page
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#000";
    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, []);

  return (
    <main
      className="flex-1 bg-black min-h-screen flex flex-col items-center justify-center"
      dir="rtl"
    >
      <div
        ref={fadeInRef}
        className="flex flex-col items-center justify-center py-12 px-4 text-center min-h-[60vh] fade-in bg-black text-white w-full"
        dir="rtl"
      >
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          404 - הדף לא נמצא
        </h1>
        <p className="text-white/80 text-lg max-w-md mb-8">
          מצטערים, הדף שחיפשת לא קיים או שהוסר.
        </p>
        <button
          onClick={() => {
            window.location.href = "http://localhost:5000/";
          }}
          className="flex w-fit cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-black text-white text-base font-bold hover:bg-gray-800 transition-colors"
        >
          <span>חזרה לדף הבית</span>
        </button>
      </div>
    </main>
  );
};

export default NotFound;
