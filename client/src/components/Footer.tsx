const Footer = () => {
  return (
    <footer className="border-t border-[#333333] py-6 sm:py-8 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <div className="text-white text-xs sm:text-sm">© {new Date().getFullYear()} אופיר זנגי. כל הזכויות שמורות.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
