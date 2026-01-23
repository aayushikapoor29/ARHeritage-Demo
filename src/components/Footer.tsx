export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="font-serif tracking-wider mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Indian Heritage AR
          </p>
          <div className="flex space-x-6">
             <span className="hover:text-stone-200 cursor-pointer transition-colors">About</span>
             <span className="hover:text-stone-200 cursor-pointer transition-colors">Privacy</span>
             <span className="hover:text-stone-200 cursor-pointer transition-colors">Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
