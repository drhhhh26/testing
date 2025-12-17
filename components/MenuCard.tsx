import React from 'react';
import { NavItem } from '../types';

interface MenuCardProps {
  item: NavItem;
  onClick: (id: string) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onClick }) => {
  return (
    <button
      onClick={() => onClick(item.id)}
      style={{ animationDelay: `${item.delay}ms` }}
      className="
        group
        relative
        w-full
        bg-sage 
        rounded-2xl 
        p-6 
        flex 
        items-center 
        justify-between 
        shadow-sm 
        border border-transparent
        hover:border-bronze
        hover:shadow-[0_8px_30px_rgba(220,148,80,0.25)]
        hover:-translate-y-1
        active:scale-[0.98]
        transition-all 
        duration-300 
        ease-out
        animate-fade-in-up
        opacity-0
      "
    >
      <div className="flex items-center gap-5">
        <div className="
          w-14 h-14 
          rounded-full 
          bg-luxury 
          flex items-center justify-center
          shadow-inner
          group-hover:scale-110
          transition-transform duration-300
        ">
          <i className={`${item.iconClass} text-xl text-bronze transition-colors duration-300`}></i>
        </div>
        <span className="text-xl font-medium text-charcoal group-hover:text-bronze transition-colors duration-300">
          {item.title}
        </span>
      </div>
      
      <i className="fa-solid fa-chevron-left text-charcoal/30 group-hover:text-bronze group-hover:-translate-x-1 transition-all duration-300"></i>
    </button>
  );
};