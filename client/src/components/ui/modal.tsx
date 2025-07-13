import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  position?: { x: number; y: number };
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className, position }) => {
  if (!isOpen) return null;

  // Calculate position styles with absolute positioning for page-relative placement
  const positionStyles = position 
    ? (() => {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get scroll position
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        
        // Calculate absolute position on the page
        const absoluteX = position.x + scrollX;
        const absoluteY = position.y + scrollY;
        
        // Estimate modal size
        const modalWidth = Math.min(1024, viewportWidth * 0.9);
        const modalHeight = Math.min(viewportHeight * 0.8, 600);
        
        // Calculate final position ensuring modal stays within page bounds
        let x = absoluteX;
        let y = absoluteY;
        
        // Adjust X to keep modal in viewport relative to current scroll
        const viewportLeft = scrollX;
        const viewportRight = scrollX + viewportWidth;
        
        if (x - modalWidth / 2 < viewportLeft + 20) {
          x = viewportLeft + modalWidth / 2 + 20;
        } else if (x + modalWidth / 2 > viewportRight - 20) {
          x = viewportRight - modalWidth / 2 - 20;
        }
        
        // Adjust Y to keep modal in viewport relative to current scroll
        const viewportTop = scrollY;
        const viewportBottom = scrollY + viewportHeight;
        
        if (y - modalHeight / 2 < viewportTop + 20) {
          y = viewportTop + modalHeight / 2 + 20;
        } else if (y + modalHeight / 2 > viewportBottom - 20) {
          y = viewportBottom - modalHeight / 2 - 20;
        }
        
        return {
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)'
        };
      })()
    : {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm animate-in fade-in-0 duration-300"
        onClick={onClose}
      />
      {/* Modal content */}
      <div
        className={cn(
          "fixed z-[999999] bg-white rounded-lg shadow-lg animate-in fade-in-0 duration-300",
          className
        )}
        style={positionStyles}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </>
  );
};

export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  
  return {
    isOpen,
    open,
    close
  };
};
