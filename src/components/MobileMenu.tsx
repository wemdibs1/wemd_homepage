import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  menuItems: Array<{ id: string; label: string }>;
  onMenuClick: (id: string) => void;
}

export default function MobileMenu({ menuItems, onMenuClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (id: string) => {
    onMenuClick(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full p-4 shadow-lg z-50 hover:bg-primary/90 transition-all"
        aria-label="메뉴 열기"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-80 bg-background shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-foreground">메뉴</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/70 hover:text-foreground"
              aria-label="메뉴 닫기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="w-full text-left px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-border/30">
            <p className="text-sm text-accent font-bold">We Make a Difference</p>
          </div>
        </div>
      </div>
    </>
  );
}
