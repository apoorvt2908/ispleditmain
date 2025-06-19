'use client'
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerUlRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { headerMenu } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.outerWidth > 1248) {
        if (window.scrollY > 165) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      } else if (window.outerWidth < 992) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const updateMenuHeight = () => {
    const header = headerRef.current as HTMLElement | null;
    const headerHeight = header?.clientHeight || 0;
    const container = menuContainerRef.current;

    if (container) {
      container.style.top = `${headerHeight}px`;
      container.style.height = `${window.innerHeight - headerHeight - 10}px`;
    }
  };

  const handleMenuHover = (menuId: string) => {
    setActiveMenu(menuId);
    document.body.classList.add("no-scroll");
    updateMenuHeight();
  };

  const closeMegaMenu = () => {
    setActiveMenu(null);
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInNavMain = target.closest('.c-navMain');
      const isInNavigation = target.closest('.c-navigation');
      const isInChosenCustomized = target.closest('.chosen-customized');

      if (!isInNavMain && !isInNavigation && !isInChosenCustomized) {
        closeMegaMenu();
      }
    };

    if (activeMenu) {
      document.addEventListener('mousemove', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousemove', handleClickOutside);
    };
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu) {
      updateMenuHeight();
    }

    window.addEventListener("resize", updateMenuHeight);
    return () => window.removeEventListener("resize", updateMenuHeight);
  }, [activeMenu]);

  const handelMobileMenu = () => {
    setIsMobileOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileOpen])

  const handelMobileDropdown = (menu_group_id: string) => {
    setShowMobileDropdown((prev) => (prev === menu_group_id ? null : menu_group_id))
  }


  return (
    <>
      <header ref={headerRef} className={`c-header ${pathname === '/' ? 'homepage' : ''} ${isFixed ? 'sticky' : ''}`}>
        <div className="container custom_container">
          <div className="row">
            <div className="col-12">


              <div className="c-header__top-Container">
                <div className="c-header__contact">
                  <ul>
                    <li className="c-header__contact_list">
                      <span className="c-header__contact_icon">
                        <img src="/images/icons/mail.svg" className="img-fluid" alt="mail icon" />
                      </span>
                      <a href="mailto:contact@inspheresolutions.com"
                        className="c-header__contact_item">contact@inspheresolutions.com</a>
                    </li>
                    <li className="c-header__contact_list">
                      <span className="c-header__contact_icon">
                        <img src="/images/icons/phone.svg" className="img-fluid"
                          alt="phone icon" />
                      </span>
                      <a href="javascript:;" className="c-header__contact_item">+91 11 4704 7879</a>
                    </li>
                  </ul>
                </div>
                <div className="generic__social d1">
                  <div className="generic__social_item">
                    <a href="https://www.linkedin.com/company/insphere-solutions-private-limited/"
                      className="rounded_icon">
                      <img src="/images/icons/linkedin.svg" className="img-fluid"
                        alt="linkedin icon" />
                    </a>
                    <a href="https://clutch.co/profile/insphere-solutions" target="_blank">
                      <img src="/images/icons/clutch.png" className="img-fluid" alt="clutch icon" />
                    </a>
                  </div>
                  <div className="generic__social_item">
                    <a href="https://www.glassdoor.co.in/Overview/Working-at-Insphere-Solutions-EI_IE2426751.11,29.htm"
                      target="_blank">
                      <img src="/images/icons/glassdoor.svg" className="img-fluid"
                        alt="glassdoor icon" />
                    </a>
                    <a href="https://www.quora.com/profile/Insphere-Solutions-Pvt-Ltd-1"
                      target="_blank">
                      <img src="/images/icons/quora.svg" className="img-fluid" alt="quora icon" />
                    </a>

                  </div>
                </div>
              </div>



              <div className="c-header__main-Container">
                <div className="c-header__logo">
                  <Link href="/" className="main_logo">
                    <img src="/images/logo/insphere-logo.svg" className="img-fluid"
                      alt="insphere logo" />
                  </Link>
                  <Link href="/" className="resp_logo">
                    <img src="/images/logo/insphere-resp-logo.svg" className="img-fluid"
                      alt="insphere logo" />
                  </Link>
                </div>

                <div className="c-header__rs">
                  <div className={`menu-toggle ${isMobileOpen ? 'open' : ''}`} onClick={handelMobileMenu}>
                    <i></i>
                  </div>
                  <div className="c-navMain">
                    <ul ref={headerUlRef}>

                      {
                        headerMenu.slice(0, headerMenu.length - 1).map((item: any, index: number) => (
                          <li key={index} className="c-navMain__list" onMouseOver={() => handleMenuHover(`${item.id}`)}>
                            <a href="javascript:;" className={`c-navMain__item dropdown ${activeMenu === `${item.id}` ? 'active' : ''}`}>{item.name}</a>
                          </li>
                        ))
                      }
                    </ul>
                    <a href="contact_us.html"
                      className="button button--radius12 button--white-bordered">Connect with Us </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <div className="c-navigation">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className={`c-navigation__responsive ${isMobileOpen ? 'active' : ''}`}>
                <ul className="menubar__resp">

                  {
                    headerMenu?.map((item: any, index: number) => (
                      <li key={index} className={`menubar__item dropdown ${showMobileDropdown === `${item.id}` ? 'active' : ''}`} onClick={() => handelMobileDropdown(`${item.id}`)}>
                        <a href="javascript:;">
                          <span>{item.name}</span>
                          <span className="dropdown_arrow">
                            <img src="/images/icons/arrow.svg" alt="arrow icon" />
                          </span>
                        </a>
                        {index === 0 &&
                          <ul className="submenu box_layout">
                            {
                              item?.children.map((item: any, index: number) => (
                                <li key={index}>
                                  <a href="cloud.html" className="submenu__item">
                                    <span className="submenu__item_icon">
                                      <img src={`/images/icons${item.icon}`} className="img-fluid"
                                        alt="cloud icon" />
                                    </span>
                                    <span className="submenu__item_text">{item.name}</span>
                                  </a>
                                </li>
                              ))
                            }
                          </ul>
                        }
                        {index !== 0 &&
                          <ul className="submenu">
                            {
                              item?.children?.menuItems?.map((item: any, index: number) => (

                                <li key={index}>
                                  <a href={item.href} className="submenu__item">
                                    {item?.icon &&
                                      <span className="submenu__item_icon">
                                        <img src={`/images/icons/${item.icon}`} className="img-fluid"
                                          alt="cloud icon" />
                                      </span>
                                    }
                                    <span className="submenu__item_text">{item.text}</span>
                                  </a>
                                </li>
                              ))
                            }
                          </ul>
                        }
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div ref={menuContainerRef} onMouseLeave={closeMegaMenu} className={`c-navigation__main ${activeMenu !== null ? 'active' : ''}`}>
                <div className="c-navigation__main_close" onClick={closeMegaMenu}><i></i></div>

                <div className="container custom_container">
                  <div className="row">
                    <div className="col-12">
                      {
                        headerMenu.map((item: any, index: number) => (
                          <div key={index} className={`c-navigation__main__item ${activeMenu === `${item.id}` ? 'active' : ''}`} id={`${item.id}`}>
                            {index === 0 &&
                              <div className="c-navigation__navBox d2">
                                <ul>
                                  {
                                    item?.children.map((item: any, index: number) => (
                                      <li key={index}>
                                        <div className="navBox_container">
                                          <div className="navBox_icon">
                                            <img src={`/images/icons${item.icon}`}
                                              className="img-fluid" alt="cloud icon" />
                                          </div>
                                          <a href={item.link} className="navBox_title">{item.name}</a>
                                          <div className="navBox_links">
                                            {
                                              item.children.map((item: any, index: number) => (
                                                <a key={index} href={item.link}>{item.name}</a>
                                              ))
                                            }
                                          </div>
                                        </div>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            }
                            {index !== 0 &&
                              <div className="row">
                                <div className="col-4">
                                  <div className="c-navigation__contentBox">
                                    <h3>{item.children.title}</h3>
                                    <p>
                                      {item.children.description}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="c-navigation__navBox d1">
                                    <ul>
                                      {
                                        item.children.menuItems.map((item: any, index: number) => (
                                          <li key={index}>
                                            <div className="navBox_links">
                                              <a href={item.href}>
                                                {item?.icon &&
                                                  <span className="navBox_links-icon">
                                                    <img
                                                      src={`/images/icons${item.icon}`}
                                                      className="img-fluid"
                                                      alt={item.text} />
                                                  </span>
                                                }
                                                <span>{item.text}</span>
                                              </a>
                                            </div>
                                          </li>
                                        ))
                                      }

                                    </ul>
                                  </div>
                                </div>
                              </div>
                            }
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header;
