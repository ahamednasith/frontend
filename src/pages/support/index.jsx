import React from "react";
import "../../App.css";
import { Helmet } from "react-helmet";
import logo from "../images/logo.png";
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

export default function Support() {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Support - Shops Near Me</title>

                <meta property="og:url" content="https://storesnearme.in/"/>
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Shops Near Me"/>
                <meta property="og:title" content="Shops Near Me"/>
                <meta property="og:description" content="Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you."/>
                <meta property="og:image" content={banner}/>

                <meta property="og:locale" content="en_us" />

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:domain" value="https://storesnearme.in/" />
                <meta name="twitter:url" value="https://storesnearme.in/" />
                <meta name="twitter:title" content="Shops Near Me"/>
                <meta name="twitter:description" content="Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you."/>
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
                <link rel="stylesheet" href="App.css"></link>
            </Helmet>
            <div className="support-theme">
                <section className="boxed-up">
                    <header className="header-privacy">
                        <img src={logo} alt="logo" />
                        <div>
                            <p>Shops</p>
                            <p>Near me</p>
                        </div>
                    </header>
                    <section className="support-class">
                        <p>Support</p>
                        <p>For any queries and support needed, reach us at <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a>. Our team will respond and do the needful.</p>
                    </section>
                    <footer className="support-footer">© Copyrights 2023 | All rights reserved</footer>
                </section>
            </div>
        </div>
    )
}