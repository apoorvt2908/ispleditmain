"use client";
import { useAppContext } from "@/context/AppContext";
import React, { useState } from 'react'

const Footer = () => {
    const { footerMenu, footerBottomMenu } = useAppContext();
    const [footerExpended, setFooterExpended] = useState<boolean>(false);

    const handelFooterExpend = () => {
        setFooterExpended((prev: boolean) => !prev);
    }
    return (
        <>
            <footer className="c-footer">
                <div className="c-footer__main">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="c-footer__main_container">
                                    <div className="c-footer__main_show_container">
                                        <span onClick={handelFooterExpend} className="c-footer__main_showMore js_toggleFootNav">
                                            <span className="txt-more">{footerExpended ? "Hide" : 'More'}</span>
                                            <span><img src="/images/icons/arrow.svg" alt="arrow icon" /></span>
                                        </span>
                                    </div>
                                    <div className={`row js_navigationAction navigation_display ${footerExpended ? 'active' : ''}`}>
                                        <div className="col-12 col-xl-7">
                                            <div className="navigation_container">
                                                <div className="navigation_container__list multiple_entities">
                                                    <a href={footerMenu[0]?.target} className="navigation_container__list_head">{footerMenu[0]?.name}</a>
                                                    <ul >
                                                        {footerMenu[0]?.children.map((item: any, index: number) => (
                                                            <li key={index}>
                                                                <div className="navigation_container__head">
                                                                    <a href={item.link} className="navigation_container__item">
                                                                        <div className="navBox_icon">
                                                                            <img src={`/images/icons${item.icon}`}
                                                                                className="img-fluid" alt={item.name} />
                                                                        </div>
                                                                        {item.name}
                                                                    </a>
                                                                </div>
                                                                {
                                                                    item?.children.map((item: any, index: number) => (
                                                                        <a key={index} href={item.link}
                                                                            className="navigation_container__item">{item.name}</a>
                                                                    ))
                                                                }
                                                            </li>
                                                        ))}
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-5">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="navigation_container">
                                                        <div className="navigation_container__list">
                                                            <a href="javascript:;"
                                                                className="navigation_container__list_head">{footerMenu[1]?.name}</a>
                                                            <ul>
                                                                <li>
                                                                    {
                                                                        footerMenu[1]?.children.map((item: any, index: number) => (
                                                                            <a key={index} href={item.link}
                                                                                className="navigation_container__item">{item.name}</a>
                                                                        ))
                                                                    }

                                                                    {/* <a href="about_us.html" className="navigation_container__item">Team</a> */}
                                                                    {/* <a href="client-stories.html" className="navigation_container__item">Credentials / Clients</a>*/}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="navigation_container">
                                                        <div className="navigation_container__list">
                                                            <a href="javascript:;"
                                                                className="navigation_container__list_head">{footerMenu[2]?.name}</a>
                                                            <ul>
                                                                <li>
                                                                    {
                                                                        footerMenu[2]?.children.map((item: any, index: number) => (
                                                                            <a key={index} href={item.link}
                                                                                className="navigation_container__item">{item.name}</a>
                                                                        ))
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="navigation_container__list">
                                                            <a href="javascript:;"
                                                                className="navigation_container__list_head">{footerMenu[3]?.name}</a>
                                                            <ul>
                                                                <li>
                                                                    {
                                                                        footerMenu[3]?.children.map((item: any, index: number) => (
                                                                            <a key={index} href={item.link}
                                                                                className="navigation_container__item">{item.name}</a>
                                                                        ))
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-footer__bottom">
                    <div className="container custom_container">
                        <div className="row">
                            <div className="col-12">
                                <div className="c-footer__bottom_p1">
                                    <div className="c-footer__link">
                                        {
                                            footerBottomMenu?.map((item: any, index: number) => (
                                                <a key={index} href={item.link}
                                                    className="c-footer__link_item">{item.name}</a>
                                            ))
                                        }
                                    </div>
                                    <div className="c-footer__connect">
                                        <div className="connect-text">Connect with Us</div>
                                        <div className="generic__social d1">
                                            <div className="generic__social_item">
                                                <a href="https://www.linkedin.com/company/insphere-solutions-private-limited/"
                                                    target="_blank" className="rounded_icon">
                                                    <img src="/images/icons/linkedin.svg" className="img-fluid"
                                                        alt="linkedin icon" />
                                                </a>
                                                <a href="https://clutch.co/profile/insphere-solutions" target="_blank">
                                                    <img src="/images/icons/clutch.png" className="img-fluid"
                                                        alt="clutch icon" />
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
                                                    <img src="/images/icons/quora.svg" className="img-fluid"
                                                        alt="quora icon" />
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-footer__bottom_p2">
                                    <div className="c-header__contact">
                                        <ul>
                                            <li className="c-header__contact_list">
                                                <span className="c-header__contact_icon">
                                                    <img src="/images/icons/mail.svg" className="u-icon" alt="mail icon" />
                                                </span>
                                                <a href="mailto:contact@inspheresolutions.com"
                                                    className="c-header__contact_item">contact@inspheresolutions.com</a>
                                            </li>
                                            <li className="c-header__contact_list">
                                                <span className="c-header__contact_icon">
                                                    <img src="/images/icons/phone.svg" className="u-icon"
                                                        alt="phone icon" />
                                                </span>
                                                <a href="javascript:;" className="c-header__contact_item">+91 11 4704 7879</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="copyright">&copy; 2005 - {new Date().getFullYear()} InSphere Solutions All Rights Reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
