import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Set active section based on scroll or pathname
  useEffect(() => {
    const path = location.pathname;

    if (path === '/') {
      const handleScroll = () => {
        const sections = ['home', 'services', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element && scrollPosition >= element.offsetTop) {
            setActive(sections[i]);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      if (path.startsWith('/projects')) setActive('projects');
      else if (path.startsWith('/blogs')) setActive('blogs');
      else if (path.startsWith('/services')) setActive('services');
    }
  }, [location.pathname]);

  // Handle delayed scroll after redirect from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
      navigate(location.pathname, { replace: true, state: {} });
    }

    if (location.pathname === '/' && location.state?.scrollToTop) {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const baseMenuItems = [
    { name: 'logo', type: 'scrolltop', image: Logo },
    { name: 'Home', type: 'route', path: '/' },
    { name: 'services', type: 'route', path: '/services' },
    { name: 'about', type: 'route', path: '/about' },
    { name: 'career', type: 'route', path: '/career' },
    // { name: 'blogs', type: 'route', path: '/blogs' },
  ];

  const menuItems = [...baseMenuItems, { name: 'contact', type: 'scroll', id: 'contact' }];

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleScrollTop = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
    } else {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
    }
  };

  const handleItemClick = (item) => {
    setActive(item.name);

    if (item.type === 'route') {
      navigate(item.path);
    } else if (item.type === 'scroll') {
      handleScroll(item.id);
    } else if (item.type === 'scrolltop') {
      handleScrollTop();
    }
  };

  return (
    <div className='w-full fixed top-0 z-50 font-[Inter] backdrop-blur-md bg-[#7A85C1]/20 shadow-md'>
      {/* Desktop / Large Screen Navbar */}
      <div className="hidden md:flex w-full h-[80px] items-center justify-between px-10 lg:px-20 xl:px-40 2xl:px-60">
        
        {/* Left: Logo */}
        <div onClick={() => handleItemClick(menuItems[0])} className="cursor-pointer flex-shrink-0">
          <img src={menuItems[0].image} alt="Logo" className="h-[60px] w-auto object-contain" />
        </div>

        {/* Center: Links */}
        <ul className="flex gap-15 items-center flex-1 justify-center pl-30">
          {menuItems.slice(1, -1).map((item) => (
            <li key={item.name} onClick={() => handleItemClick(item)}>
              {item.type === 'route' ? (
                <RouterLink
                  to={item.path}
                  className={`text-white text-sm font-medium transition duration-300 hover:text-[#00ffae] ${
                    active === item.name ? 'text-[#00ffae] border-b-2 border-[#00ffae] pb-1' : ''
                  }`}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </RouterLink>
              ) : (
                <span
                  className={`text-white text-sm font-medium transition duration-300 hover:text-[#00ffae] ${
                    active === item.name ? 'text-[#00ffae]' : ''
                  }`}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Right: CTA Button */}
       <div className="relative flex justify-center items-center">
  {/* Glowing Aura */}
  <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#f0c417]/40 via-[#f0c417]/20 to-transparent 
                  blur-3xl animate-ping-slow"></div>

  {/* Button */}
  <button
    onClick={() => navigate("/contact")}
    className="relative z-10 text-white text-lg font-semibold px-8 py-3 rounded-full 
               border-2 border-[#f0c417] bg-gradient-to-r from-[#f0c417]/30 to-transparent
               shadow-[0_0_25px_rgba(240,196,23,0.7)] 
               transition duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(240,196,23,1)] 
               animate-heartbeat"
  >
    Get More Leads
  </button>

      </div>

      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden flex justify-between items-center px-5 h-full backdrop-blur bg-gray-600/40'>
        <RouterLink to='/' onClick={handleScrollTop}>
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <img src={Logo} alt='Logo' className='w-full h-full object-contain' />
          </div>
        </RouterLink>
        <button
          className='text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className='md:hidden absolute top-[80px] left-0 w-full bg-black border-t border-[#444]'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => handleItemClick(item)}>
                {item.type === 'route' ? (
                  <RouterLink
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#f0c417]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </RouterLink>
                ) : item.type === 'scrolltop' && item.image ? (
                  <div className='w-[40px] h-[40px] cursor-pointer'>
                    <img src={item.image} alt='Logo' className='w-full h-full object-contain' />
                  </div>
                ) : (
                  <span
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-200 ${
                      active === item.name
                        ? 'bg-[#262424] text-[#f0c417]'
                        : 'text-white hover:bg-[#4f4e4e]'
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
