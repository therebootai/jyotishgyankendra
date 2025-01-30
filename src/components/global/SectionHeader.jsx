export default function SectionHeader({ children }) {
  return (
    <div className="relative w-fit self-center">
      <h1 className="text-site-main-blue font-semibold text-2xl md:text-4xl mx-3">
        {children}
      </h1>
      <div className="bg-site-main-yellow w-full h-2 md:h-4"></div>
    </div>
  );
}
