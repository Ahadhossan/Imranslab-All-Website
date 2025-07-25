"use client";

/** @format */

import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className='lg:hidden z-[999] relative' onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className='fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#0F214D] backdrop-blur text-white p-6 pb-20'
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}>
        <ul>
          {Menus.map(({ name, subMenu, path }, i) => {

            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className=''>
                <span
                  className='flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative'
                  onClick={() => setClicked(isClicked ? null : i)}>
                  <a href={path}>{name}</a>
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && 'rotate-180'} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial='exit'
                    animate={isClicked ? 'enter' : 'exit'}
                    variants={subMenuDrawer}
                    className='ml-5'>
                    {subMenu.map(({ name, path }) => (
                      <li
                        key={name}
                        className='p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer hover:text-[#00D47E]'>
                        <a href={path}>{name}</a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
