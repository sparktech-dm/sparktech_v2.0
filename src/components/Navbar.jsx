import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { scroller, animateScroll as scroll } from 'react-scroll';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
      else if (path.startsWith('/about')) setActive('about');
      else if (path.startsWith('/career')) setActive('career');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 800,
          smooth: 'easeInOutQuart',
        });
      }, 100);
      navigate(location.pathname, { replace: true, state: {} });
    }
    if (location.state?.scrollToTop) {
      setTimeout(() => {
        scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
      }, 100);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const NAV_ITEMS = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'about', path: '/about' },
    { name: 'career', path: '/career' },
    { name: 'blogs', path: '/blogs' },
  ];

  const handleScrollTop = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToTop: true } });
    } else {
      scroll.scrollToTop({ duration: 800, smooth: 'easeInOutQuart' });
    }
  };

  return (
    <div className="w-full fixed top-0 z-50 font-[Inter] bg-[#f2eee0]/85 backdrop-blur-lg border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">

      {/* ══════════════ DESKTOP NAVBAR ══════════════ */}
      <header className="hidden md:flex w-full h-[76px] items-center justify-between px-10 lg:px-12 xl:px-20 2xl:px-24">

        {/* Left: Logo */}
        <div onClick={handleScrollTop} className="cursor-pointer flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-[52px] w-auto object-contain" />
        </div>

        {/* Center: Nav Items */}
        <nav aria-label="Main navigation" className="flex flex-1 justify-center h-full">
          <ul className="flex items-center gap-2 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.name;
              const label = item.name.charAt(0).toUpperCase() + item.name.slice(1);
              return (
                <li key={item.name}>
                  <RouterLink
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setActive(item.name)}
                    className={`
                      inline-flex items-center justify-center
                      px-5 py-[8px] rounded-full
                      text-[14px] font-bold tracking-[0.03em] uppercase
                      transition-all duration-300 select-none
                      ${isActive
                        ? 'text-[#cc7722] bg-[#cc7722]/10 shadow-[inset_0_0_0_1px_rgba(204,119,34,0.2)]'
                        : 'text-[#395c7a] hover:text-[#cc7722] hover:bg-black/5'
                      }
                    `}
                  >
                    {label}
                  </RouterLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: CTA Button */}
        <div className="relative flex justify-center items-center">
          <button
            onClick={() => navigate('/contact', { state: { scrollTo: 'contact-form' } })}
            className="relative flex items-center justify-center text-white text-[13px] font-extrabold uppercase tracking-[0.06em] px-8 py-3 rounded-full
                       bg-[#cc7722] border-2 border-[#cc7722] shadow-[0_4px_20px_rgba(204,119,34,0.5)]
                       transition-all duration-300 
                       hover:bg-white hover:text-[#cc7722] hover:shadow-[0_6px_25px_rgba(204,119,34,0.6)] hover:-translate-y-1 active:scale-95"
          >
            Get More Leads
          </button>
        </div>
      </header>

      {/* ══════════════ MOBILE NAVBAR — UNTOUCHED ══════════════ */}
      <div className='md:hidden flex justify-between items-center px-5 h-[80px] w-full backdrop-blur bg-gray-600/40 relative z-40'>
        <RouterLink to='/' onClick={handleScrollTop}>
          <div className='w-[50px] h-[50px] cursor-pointer'>
            <img src={Logo} alt='Logo' className='w-full h-full object-contain' />
          </div>
        </RouterLink>
        <button className='text-white text-2xl' onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-auto pb-8 w-[200px] bg-gradient-to-b from-[#517B98]/80 via-[#375367]/80 to-[#1B2832]/80 backdrop-blur-sm shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end p-4">
          <button
            className='text-white text-2xl transition-transform active:scale-95'
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className='flex flex-col items-center gap-5 mt-2'>
          {[...NAV_ITEMS, { name: 'contact', path: '/contact' }].map((item) => {
            const displayName = item.name.charAt(0).toUpperCase() + item.name.slice(1);
            return (
              <li
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                <RouterLink
                  to={item.path}
                  className={`text-[15px] font-bold tracking-wide transition-all duration-200 ${active === item.name ? 'text-white' : 'text-gray-200 hover:text-white'
                    }`}
                >
                  {displayName}
                </RouterLink>
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;