import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState({
    main: null,
    sub: null
  });
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Our Doctors',
      path: '/our-doctors',
      submenu: [
        {
          title: 'Meet Dr. Tindel',
          path: '/meet-dr-tindel',
        },
        {
          title: 'Meet Dr. Shah',
          path: '/neel-shah-md',
        }
      ]
    },
    {
      title: 'Our Practice',
      path: '/about-our-practice',
      submenu: []
    },
    {
      title: 'Our Expertise',
      path: '/spine-101',
      submenu: [
        { title: 'Spine 101', path: '/spine-101' },
        { title: 'Common Diagnoses', path: '/common-diagnoses' },
        { title: 'Minimally Invasive Spine Surgery', path: '/minimally-invasive-spine-surgery' },
      ]
    },
    {
      title: 'Patient Resources',
      path: '/before-your-visit',
      submenu: [
        { title: 'Prepare for Your Visit', path: '/before-your-visit' },
        { title: 'Insurance & Forms', path: '/insurance-and-forms' },
        { title: "I've got your back (Book)", path: '/ive-got-your-back' }
      ]
    }
  ];

  const toggleMobileDropdown = (level, index) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [level]: prev[level] === index ? null : index
    }));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isActiveParent = (item) => {
    const hasActiveChild = item.submenu?.some(subItem => 
      location.pathname === subItem.path || 
      subItem.submenu?.some(grandChild => location.pathname === grandChild.path)
    );
    return hasActiveChild || location.pathname === item.path;
  };

  return (
    <>
      <div className="h-[72px] md:h-[79px]" aria-hidden="true" />
      
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <img 
                src="/images/logo-header.png?v=3.0"
                alt="New York Center for Spinal Disorders"
                width={window.innerWidth < 768 ? 150 : 180}
                height={window.innerWidth < 768 ? 50 : 50}
                className="transform transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                  isActive('/') ? 'text-blue-600 font-medium' : ''
                }`}
              >
                Home
              </Link>
              
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-all duration-300 ${
                      isActiveParent(item) ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.submenu?.length > 0 && (
                      <ChevronDown size={16} className="transform transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>

                  {item.submenu?.length > 0 && (
                    <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white border border-gray-200 rounded-md shadow-lg">
                        {item.submenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="group/sub relative">
                            <Link
                              to={subItem.path}
                              className={`flex items-center justify-between px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-300 ${
                                isActive(subItem.path) ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700'
                              }`}
                            >
                              <span>{subItem.title}</span>
                              {subItem.submenu?.length > 0 && (
                                <ChevronRight size={14} />
                              )}
                            </Link>

                            {subItem.submenu?.length > 0 && (
                              <div className="absolute left-full top-0 w-64 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                <div className="bg-white border border-gray-200 rounded-md shadow-lg ml-2">
                                  {subItem.submenu.map((grandChild, grandChildIndex) => (
                                    <Link
                                      key={grandChildIndex}
                                      to={grandChild.path}
                                      className={`block px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-300 ${
                                        isActive(grandChild.path) ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700'
                                      }`}
                                    >
                                      {grandChild.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link 
                to="/appointment" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          
          <div 
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="mt-4 space-y-2">
              <Link 
                to="/" 
                className={`block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                  isActive('/') ? 'text-blue-600 font-medium' : ''
                }`}
              >
                Home
              </Link>
              
              {navigationItems.map((item, index) => (
                <div key={index} className="py-2">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      to={item.path}
                      className={`flex-1 text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                        isActiveParent(item) ? 'text-blue-600 font-medium' : ''
                      }`}
                    >
                      {item.title}
                    </Link>
                    {item.submenu?.length > 0 && (
                      <button
                        onClick={() => toggleMobileDropdown('main', index)}
                        className="ml-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <ChevronDown 
                          size={16} 
                          className={`transform transition-transform duration-300 ${
                            activeDropdowns.main === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  <div 
                    className={`pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                      activeDropdowns.main === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {item.submenu?.map((subItem, subIndex) => (
                      <div key={subIndex} className="py-1">
                        <div className="flex items-center justify-between">
                          <Link
                            to={subItem.path}
                            className={`flex-1 text-sm hover:text-blue-600 transition-colors duration-300 ${
                              isActive(subItem.path) ? 'text-blue-600 font-medium' : 'text-gray-600'
                            }`}
                          >
                            {subItem.title}
                          </Link>
                          {subItem.submenu?.length > 0 && (
                            <button
                              onClick={() => toggleMobileDropdown('sub', subIndex)}
                              className="ml-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                            >
                              <ChevronDown 
                                size={14} 
                                className={`transform transition-transform duration-300 ${
                                  activeDropdowns.sub === subIndex ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {subItem.submenu?.length > 0 && (
                          <div 
                            className={`pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                              activeDropdowns.sub === subIndex ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            {subItem.submenu.map((grandChild, grandChildIndex) => (
                              <Link
                                key={grandChildIndex}
                                to={grandChild.path}
                                className={`block py-1 text-sm hover:text-blue-600 transition-colors duration-300 ${
                                  isActive(grandChild.path) ? 'text-blue-600 font-medium' : 'text-gray-600'
                                }`}
                              >
                                {grandChild.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <Link 
                to="/appointment"
                className="block mt-4 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;