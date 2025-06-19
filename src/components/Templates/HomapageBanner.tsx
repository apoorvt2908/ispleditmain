import React from 'react'

const HomapageBanner = () => {
    return (
        <>
            <div className="clearfix"></div>

            <div className="hero__banner fullscreen-height">
                <div className="myslider owl-carousel owl-theme owl-carousel owl-theme hero__banner-container">
                    <div className="item" style="background-image: url('/images/banner/banner-1.png') ">
                        <div className="container custom_container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero__banner-content">
                                        <h2 className="heading">Unlock Business Value with an Intelligent Cloud Platform</h2>
                                        <p className="desc">Enabling data-driven optimization, gain operational efficiencies and
                                            scale faster with analytics using flexible cloud solutions that work for you.
                                        </p>
                                        <a href="cloud.html"
                                            className="button button--radius50 button--bordered button--w200 ">Know more</a>
                                    </div>
                                    <div className="hero__banner-image d-block d-lg-none mt-3">
                                        <img src="/images/banner/banner_1_small.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item" style="background-image: url('/images/banner/banner-2.png');">
                        <div className="container custom_container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero__banner-content">
                                        <h2 className="heading">Expand business digital footprints across web & mobile</h2>
                                        <p className="desc">Build highly intuitive custom applications that match your unique
                                            business needs</p>
                                        <a href="digital-engineering.html"
                                            className="button button--radius50 button--bordered button--w200 ">Know more</a>
                                    </div>
                                    <div className="hero__banner-image d-block d-lg-none mt-3">
                                        <img src="/images/banner/banner_2_small.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item" style="background-image: url('/images/banner/banner-3.png');">
                        <div className="container custom_container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero__banner-content">
                                        <h2 className="heading">Simplify your business journey at speed with AWS cloud partner
                                        </h2>
                                        <p className="desc">Experience industry expertise in mission critical process for
                                            business with AWS cloud solutions
                                        </p>
                                        <a href="aws.html"
                                            className="button button--radius50 button--bordered button--w200 ">Know more</a>
                                    </div>
                                    <div className="hero__banner-image d-block d-lg-none mt-3">
                                        <img src="/images/banner/banner_3_small.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item" style="background-image: url('/images/banner/banner-4.png');">
                        <div className="container custom_container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero__banner-content">
                                        <h2 className="heading">Contract Resourcing Enhancing Servics Experience</h2>
                                        <p className="desc">Add an extra set of force to your exsistind team to meet your
                                            short-term or long-term requirements. Hire a technology expert to launch your
                                            solution, cover business needs, and supervise task completion.</p>
                                        <a href="contract-it-staffing.html"
                                            className="button button--radius50 button--bordered button--w200 ">Know more</a>
                                    </div>
                                    <div className="hero__banner-image d-block d-lg-none mt-3">
                                        <img src="/images/banner/banner_4_small.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item" style="background-image: url('/images/banner/zscalar-bg.png');">
                        <div className="container custom_container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero__banner-content">
                                        <h2 className="heading">Zscaler Powered & Security First Enterprise Cloud</h2>
                                        <p className="desc"></p>
                                        <a href="zscaler.html"
                                            className="button button--radius50 button--bordered button--w200 ">Know more</a>
                                    </div>
                                    <div className="hero__banner-image d-block d-lg-none mt-3">
                                        <img src="/images/banner/zscaler-banner_small.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul id='carousel-custom-dots' className='owl-dots'>
                    <li className='owl-dot'>
                        <div className='hero_banner_dots_numb'>01</div>
                        <div className='hero_banner_dots_bar'></div>
                        <div className='hero_banner_dots_text'>Unlock Business Value with an Intelligent Cloud Platform</div>
                    </li>
                    <li className='owl-dot'>
                        <div className='hero_banner_dots_numb'>02</div>
                        <div className='hero_banner_dots_bar'></div>
                        <div className='hero_banner_dots_text'>Expand business digital footprints across web & mobile</div>
                    </li>
                    <li className='owl-dot'>
                        <div className='hero_banner_dots_numb'>03</div>
                        <div className='hero_banner_dots_bar'></div>
                        <div className='hero_banner_dots_text'>Simplify your business journey at speed with AWS cloud partner
                        </div>
                    </li>
                    <li className='owl-dot'>
                        <div className='hero_banner_dots_numb'>04</div>
                        <div className='hero_banner_dots_bar'></div>
                        <div className='hero_banner_dots_text'>Contract Resourcing Enhancing Servics Experience</div>
                    </li>
                    <li className='owl-dot'>
                        <div className='hero_banner_dots_numb'>05</div>
                        <div className='hero_banner_dots_bar'></div>
                        <div className='hero_banner_dots_text'>Zscaler Powered & Security First Enterprise Cloud</div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HomapageBanner
