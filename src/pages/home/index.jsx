import React from "react";
import "../../App.css";
import { Helmet } from "react-helmet";
import logo from "../images/logo.png";
import appStore from "../images/appstore.png";
import playStore from "../images/playstore.png";
import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";
import apple57x57 from "../images/apple-touch-icon-57x57.png";
import apple72x72 from "../images/apple-touch-icon-72x72.png";
import apple76x76 from "../images/apple-touch-icon-76x76.png";
import apple114x114 from "../images/apple-touch-icon-114x114.png";
import apple120x120 from "../images/apple-touch-icon-120x120.png";
import apple144x144 from "../images/apple-touch-icon-144x144.png";
import apple152x152 from "../images/apple-touch-icon-152x152.png";
import apple180x180 from "../images/apple-touch-icon-180x180.png";
import favicon from "../images/favicon.ico";
import banner from "../images/banner.jpeg";

export default function Home() {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shops Near Me</title>

                <meta property="og:url" content="https://storesnearme.in/" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Shops Near Me" />
                <meta property="og:title" content="Shops Near Me" />
                <meta property="og:description" content="Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you." />
                <meta property="og:image" content={banner}/>

                <meta property="og:locale" content="en_us" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:domain" value="https://storesnearme.in/" />
                <meta name="twitter:url" value="https://storesnearme.in/" />
                <meta name="twitter:title" content="Shops Near Me" />
                <meta name="twitter:description" content="Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you." />
                <meta name="twitter:image" content={banner} />

                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                <link rel="apple-touch-icon" href="images/apple-touch-icon.png" />
                <link rel="apple-touch-icon" sizes="57x57" href={apple57x57} />
                <link rel="apple-touch-icon" sizes="72x72" href={apple72x72} />
                <link rel="apple-touch-icon" sizes="76x76" href={apple76x76} />
                <link rel="apple-touch-icon" sizes="114x114" href={apple114x114} />
                <link rel="apple-touch-icon" sizes="120x120" href={apple120x120} />
                <link rel="apple-touch-icon" sizes="144x144" href={apple144x144} />
                <link rel="apple-touch-icon" sizes="152x152" href={apple152x152} />
                <link rel="apple-touch-icon" sizes="180x180" href={apple180x180} />
                <meta name="theme-color" content="#000" />
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Helmet>
            <div className="index-body">
                <section className="boxed-up">
                    <div className="shop-static">
                        <header className="header-index">
                            <div className="logo-align">
                                <img src={logo} alt="logo" />
                                <div>
                                    <h1>Shops</h1>
                                    <p>Near Me</p>
                                </div>
                            </div>
                            <p className="shop-description">Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you.</p>
                            <div className="stores">
                                <a href="#f"><img src={appStore} alt="appstore" /><p>Coming Soon!</p></a>
                                <a href="#s"><img src={playStore} alt="playstore" /><p>Coming Soon!</p></a>
                            </div>
                        </header>
                        <div className="phone-images">
                            <img src={phone1} alt="phone" />
                            <img src={phone2} alt="phone" />
                        </div>
                    </div>
                </section>
                <footer className="footer-index">
                    <div className="footer-flex-index">
                        <a href="terms#privacy" target="_self">Privacy Policy</a>
                        <a href="terms" target="_self">Terms & Conditions</a>
                    </div>
                    <p>© Copyrights 2023 | All rights reserved</p>
                </footer>
            </div>
        </div>
    )
}