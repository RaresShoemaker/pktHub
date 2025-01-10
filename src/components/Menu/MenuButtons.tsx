import React from 'react';
import { cn } from '../../lib/utils';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

interface MenuButtonProps {
  title: string;
  icon: React.ReactNode;
  query?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, icon, query }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const currentCategory = searchParams.get('category');
  
  const isSelected = !query ? 
    location.pathname === '/' && !currentCategory :
    currentCategory === query || (!currentCategory && query === 'home');
  
  return (
    <Link 
      to={query ? `/?category=${query}` : '/'}
    >
      <div 
        className={cn(
          'w-full rounded-lg text-white flex gap-2 items-center p-2',
          isSelected && 'bg-white/10 rounded-2xl [&_rect.icon-bg]:fill-white/50 [&_#icon-bg]:fill-opacity-100'
        )}
      >
        {icon}
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default MenuButton;