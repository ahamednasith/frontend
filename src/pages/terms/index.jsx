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

export default function Terms() {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Terms & Conditions - Shops Near Me</title>

                <meta property="og:url" content="https://storesnearme.in"/>
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
            <div className="privacy-theme">
                <section className="boxed-up">
                    <header className="header-privacy">
                        <img src={logo} alt="logo" />
                        <div>
                            <p>Shops</p>
                            <p>Near me</p>
                        </div>
                    </header>
                    <h1 className="bold terms">Terms & Conditions</h1>
                    <p className="privacy-paragraph">These Terms  and Conditions of Use (“Terms and Conditions”) govern your use of our “Shops” mobile application (“Platform/ Service”) made available by “Pepul Tech Private Limited”, a company registered under the Indian Companies Act 2013, having its registered office at “32, 1ST Floor, 8TH Cross Street, Ramnagarsouth, Madipakkam, Chennai 600091”. The Terms “you” and “your” refer to the user of the Platform. The term (“Stores”) refers to the shops and other commercial establishments which offer discounts for products on our Platform.</p>
                    <p className="privacy-paragraph">Our Platform  (as we have described below in detail) and these Terms and Conditions are compliant with the Indian Penal Code, 1860, and Information Technology Act, 2000, including all amendments made to it and rules framed under it. When you use our Platform, you accept and agree to these Terms and Conditions. However, please note that we do not represent that we are compliant with laws of any country apart from India. If you wish to use our Platform, please ensure that you are permitted to do so, in your jurisdiction.</p>
                    <p className="privacy-paragraph">You are required to follow certain rules while you use our Platform. We have listed these rules in this document. Please read these Terms and Conditions. Please note that by using our Platform, you agree to these Terms and Conditions. Also, if you are using this Platform outside India, please comply with your local laws.</p>
                    <p className="privacy-paragraph">These Terms and Conditions of Service govern your use of our Platform.</p>
                    <p className="privacy-paragraph">Our Privacy Policy also governs your use of our Platform and explains how we collect, safeguard and disclose information that results from your use of our web pages.</p>
                    <p className="privacy-paragraph">Your agreement with us includes these Terms and Conditions as well as our Privacy Policy (“Agreements”). You acknowledge that you have read and understood the Agreements and agree to be bound of them.</p>
                    <p className="privacy-paragraph">If you do not agree with (or cannot comply with) the Agreements, then you may not use the Platform, but please let us know by emailing at <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Platform.</p>
                    <ol className="privacy-thing">
                        <li className="bold headings">How the Service Works</li>
                        <ul className="no-list">
                            <li>Shops is a Platform that seeks to connect users with hyperlocal shops and establishments which offer products for sale along with discount offers.</li>
                            <li>For Stores, we offer a platform to promote your store or products. Stores can apply to list themselves on our Platform and Students can review their profile, communicate with Stores avail an offer for the sale of products directly at the Store’s physical location (called a "Product Offer").</li>
                            <li>For Users, we provide a marketplace to find a list of Stores and Product Offers. Users may be able to review Product Offers as a registered member on the Platform.</li>
                            <li>We reserve the right to restrict any Services and or remove any Store and/or Product Offer at will.</li>
                        </ul>
                        <li className="bold headings">Accounts</li>
                        <ul className="no-list">
                            <li>You need to register to use our Services and access our Platform. You are asked to provide certain personal information when you sign up for our Services including name, address, telephone number, email address. The personal information collected from You during the registration process is used to manage your account (such as for billing purposes).</li>
                            <li>You agree to (a) immediately notify us of any unauthorized use of your username or password or any other breach of security, and (b) ensure that you exit from your account at the end of each session.</li>
                            <li>You have complete responsibility for your account and everything that happens on your account, including for any harm or damage (to us or anyone else) caused by someone using your account without your permission. This means you need to be careful with your password. You may not transfer your account to someone else or use someone else’s account.</li>
                            <li>If you suspect someone else is using your account, let us know by contacting us at <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a></li>
                        </ul>
                        <li className="bold headings">Membership</li>
                        <ol className="no-list">
                            <li className="bold">Users</li>
                            <ul className="no-list">
                                <li>By creating an Account on our Platform you confirm that you are over the age of 18 years and are authorized to enter into contracts including this one with Shops. As a minor if you wish to use our Services, such use shall be made available to you by your legal guardian or parents, who have agreed to these Terms. In the event a minor utilizes the Platform, it is assumed that he/she has obtained the consent of the legal guardian or parents.</li>
                            </ul>
                            <li className="bold">Stores</li>
                            <ul className="no-list">
                                <li>You must be authorized to represent the store that you act for either as a proprietor or as a partner or as an authorized signatory. As a Store, you will have access to tools that enable you to manage marketing, offers and communication and other tools provided by us. In addition, you will have the opportunity to display a Product Offer. Acceptance of Product Offers is at   our   sole   discretion   and   we   may   remove   Product   Offers   from   our Services at any time for any reason. Any Product Offer you post (i) must not breach any agreements you have entered into with anyone, including this Agreement; and (ii) must contain accurate, current and complete information. If you are accepted and your Product Offer is presented within our Services, you must continually comply with this Agreement.</li>
                                <li>You acknowledge that Stores are not agents of Shops but are independent contractors who operate a separate and distinct business from Shops. As such, we do not endorse or control the Stores, content and or Product Offers, the actual product or service that they offer.</li>
                                <li>You acknowledge that since Shops only facilitates the viewing of Product Offers and advertisement of Stores along with content of the Stores, and accordingly all payments to the Stores and invoices shall be raised by the Store on you.</li>
                            </ul>
                        </ol>
                        <li className="bold headings">Interaction with other Members</li>
                        <ol className="some-list">
                            <li>You are solely responsible for your interactions with other members. We do not attempt to verify the qualifications or statements of our members. We make no representations or warranties as to the conduct of members or their compatibility with any current or future members.</li>
                            <li>In no event shall Shops and/or its officers, employees, agents or affiliates be liable to you or any third person for any damages whatsoever, whether direct, indirect, general, special, compensatory, consequential,   exemplary,   and/or   incidental,   including   lost   profits, arising out of or relating to any act or omissions of you, Shops and/or its officers, employees, agents or affiliates, our third party investigative service, any member or anyone else in connection with the use of our Services or the Website, including without limitation, bodily injury, emotional distress, and/or any other damages resulting from communications or meetings with other users of our services or persons you meet through our services, or otherwise.</li>
                            <li>Notwithstanding anything to the contrary contained herein, and to the maximum extent allowed by law, the liability of Shops and/or its officers, employees, agents and affiliates, to you and your heirs at law for any cause whatsoever, and regardless of the form of the action, shall be limited to the amount paid, if any, by you to us for our services during the preceding twelve months.</li>
                        </ol>
                        <li className="bold headings">Non Solicit</li>
                        <ul className="no-list">
                            <li>During the term of this Agreement and for two years thereafter, no Member shall, directly or indirectly, circumvent, initiate, solicit, negotiate, contract or enter into any business transactions with any Member introduced by us through our Services, without our consent. In case of such circumvention, such Member agrees and guarantees that such Member will pay a legal monetary penalty that is equal to the commission or fee we would have realized in such transactions, had Member not circumvented our rights under this Agreement.</li>
                        </ul>
                        <li className="bold headings">Content</li>
                        <ul className="no-list">
                            <li>Each Store is provided the opportunity to share audio, video and text content (“Content”) about their Stores and Product Offers on the Platform.</li>
                            <li>Shops grants you a limited, non-exclusive, non-transferable license to access and view the Content. All other uses are expressly prohibited.</li>
                            <li>You may not copy, reproduce, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, sublicense, or otherwise transfer or use any Content unless we give you explicit permission to do so in a written agreement.</li>
                        </ul>
                        <li className="bold headings">Content Posted by You</li>
                        <ul className="no-list">
                            <li>As a Member, you may be able to post content, including uploading videos, photos and providing reviews of Members. You are solely responsible for the content that you publish or display (hereinafter, “post”) using our Services, or transmit or display to other Members. You will not post on the Website or Service, or transmit or display to other Members, any defamatory, inaccurate, false, abusive, obscene, profane, offensive, sexually oriented, threatening, harassing, racially offensive, or illegal material, or any material that infringes or violates another party's rights (including, but not limited to, intellectual property rights, and rights of privacy and publicity). By posting Content using our Services, you automatically grant, and you represent and warrant that you have the right to grant, to us, our affiliates, licensees and successors, an irrevocable, perpetual, non-exclusive, fully paid, worldwide license to use, copy, perform, display, reproduce, adapt, modify and distribute such information and content and to prepare derivative works of, or incorporate into other works, such information and content, and to grant and authorize sublicenses of the foregoing. You further represent and warrant that public posting and use of your content by us will not infringe or violate the rights of any third party.</li>
                        </ul>
                        <li className="bold headings">Restrictions on Use of Platform</li>
                        <ul className="no-list">
                            <li>Your use of our Platform and Services is solely for Your use. Any use of the Platform, Services or courses or their contents other than for personal purposes is prohibited. Your personal and non-commercial use of this Platform or our Services and/or Courses shall be subjected to the following restrictions:</li>
                            <ol className="some-list">
                                <li>You may not decompile, reverse engineer, or disassemble the contents of the Platform or modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Platform and/or our Website/Application and/or Services/Courses, or remove any copyright, trademark registration, or other proprietary notices from the contents of the Platform.</li>
                                <li>You will not use this Platform for commercial purposes of any kind, nor advertise or sell the Platform nor solicit others (including, without limitation, solicitations for contributions or donations) or use any public forum for commercial purposes of any kind, nor use the Platform in any way that is unlawful, or harms SHOPS or any other person or entity as determined by SHOPS.</li>
                                <li>In accordance with Rule 3 (1) (b) of the Intermediaries Rules, 2021, You shall not host, display, upload, modify, publish, transmit, store, update or share any information that,— belongs to another person and to which the user does not have any right; is defamatory, obscene, pornographic, paedophilic, invasive of another’s privacy including bodily privacy, insulting or harassing on the basis of gender, libellous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise inconsistent with or contrary to the laws in force; is harmful to child; infringes any patent, trademark, copyright or other proprietary rights; violates any law for the time being in force; deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact; impersonates another person; threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting other nation; contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource; is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person;</li>
                                <li>Apart from the above, You shall not be permitted to perform any of the following prohibited activities while availing our Services or using our Platform:</li>
                                <ol className="list-inside-list">
                                    <li>Alter or modify any part of the Services or Content or Course information.</li>
                                    <li>Interfering with any other person's use or enjoyment of the Platform.</li>
                                    <li>falsely state or otherwise misrepresent Your affiliation with a person or entity.</li>
                                    <li>Post, transmit or make available any material that contains viruses, trojan horses, worms, spyware, time bombs, cancelbots, or other computer programming routines, code, files or such other programs that may harm the Platform, interests or rights of other users or limit the functionality of any computer software, hardware or telecommunications, or that may harvest or collect any data or personal information about other Users without their consent.</li>
                                    <li>Disrupt or interfere with the security of, or otherwise cause harm to, the Platform, materials, systems resources, or gain unauthorized access to user accounts, passwords, servers or networks connected to or accessible through the Platform or any affiliated or linked sites.</li>
                                    <li>Access or use the Platform in any manner that could damage, disable, overburden or impair any of the Platform's servers or the networks connected to any of the servers on which the Application/Website is hosted.</li>
                                    <li>Intentionally or unintentionally interfere with or disrupt the services or violate any applicable laws related to the access to or use of the Platform, violate any requirements, procedures, policies or regulations of networks connected to the Platform or engage in any activity prohibited by these Terms.</li>
                                </ol>
                            </ol>
                        </ul>
                        <ul className="no-list">
                            <li className="bold">Payments:</li>
                            <ul className="no-list">
                                <li>Shops does not take an payments. All payments for products will be made directly to the Store at their physical location.</li>
                            </ul>
                            <li className="bold">Cancellation:</li>
                            <ul className="no-list">
                                <li>Given that the Platform only providers you with information and access to the Stores and Product Offers and Content, there are no payments made to Shops and accordingly no cancellations.</li>
                            </ul>
                            <li className="bold">Refunds:</li>
                            <ul className="no-list">
                                <li>Given that the Platform only providers you with information and access to the Stores and Product Offers and Content, there are no payments made to Shops and accordingly no refunds.</li>
                            </ul>
                            <li>Any refunds need to be processed by the Stores directly.</li>
                        </ul>
                        <li className="bold headings">Intellectual Property</li>
                        <ul className="no-list">
                            <li className="bold">Shops Intellectual Property:</li>
                            <ul className="no-list">
                                <li>Except for the trademark SHOPS all information, content, material, trademarks, services marks, trade names, and trade secrets including but not limited to the software, text, images, graphics, video, script and audio, contained in the Platform, Application, Website, Services are proprietary property and vest exclusively with Shops.  No Intellectual Property may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted or distributed in any way without obtaining prior written permission from Shops and nothing in the Platform, Application or Website or Services shall be deemed to confer a right of ownership or any other right, interest or title to or in any of the intellectual property rights belonging to Shops, to the User. You may own the medium/device on which the information, content or materials resides, but Shops shall at all times retain full and complete title to the information, content or materials and all intellectual property rights communicated by Shops through such medium.</li>
                            </ul>
                            <li className="bold">Store IP</li>
                            <ul className="no-list">
                                <li>All Content and Product Offers are owned by the respective Store. Each Store represents that they are authorized to display the Product Offers and Content and owns the intellectual property.</li>
                            </ul>
                            <li className="bold">IP Infringement Take Downs:</li>
                            <ul className="no-list">
                                <li>Shops respects the intellectual property rights of others. If you believe that material located on or linked to by the Platform violates your copyright, or intellectual property you are encouraged to notify us at <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a>.</li>
                                <li>Shops will respond to all such notices, including as required or appropriate by removing the infringing material or disabling all links to the infringing material.</li>
                            </ul>
                        </ul>
                        <li className="bold headings" id="privacy">Privacy Policy</li>
                        <ul className="no-list">
                            <li>The User hereby consents, expresses and agrees that he/she has read and fully understands the Privacy Policy of Shops in respect of the Platform which can be found here. You further consent that the terms and contents of such Privacy Policy are acceptable to you.</li>
                        </ul>
                        <li className="bold headings">Grievance Redressal</li>
                        <ul className="no-list">
                            <li>We make all best endeavours to provide You with a pleasant experience. In the unlikely event that You face any issues, please contact us at :</li>
                            <li>Grievance Officer (provided in accordance with the IT Act, 2000 and its rules): <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a></li>
                            <li>Customer Support : Reach out to us on <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a> in case of any queries.</li>
                        </ul>
                        <li className="bold headings">Disclaimer</li>
                        <ul className="no-list">
                            <li>Our Platform provides you with access to compiled Store and Product Offers. Such information is provided on an As Is basis and We assume no liability for the accuracy or completeness or use or non-obsolescence of such information. We shall not be liable to update or ensure continuity of such information contained on the Platform. We would not be responsible for any errors, which might appear in such information, which is compiled from third party sources or for any unavailability of such information.</li>
                            <li>From time to time the Platform may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s). You may not create a link to the Website from another website or document without Shop's prior written consent.</li>
                            <li>The Platform is hosted on third party servers and may be subject to routine maintenance. In the event that a scheduled maintenance is to take place, Shops will inform you beforehand by giving you a day's notice if possible. In the event that the servers/services are down and not working on account of a server failure Shops shall not be responsible or liable for any losses.</li>
                            <li>Shops has the right to change, modify, suspend, or discontinue and/or eliminate any aspect(s), features or functionality of the Platform or the Services as it deems fit at any time without notice. Further, Shops has the right to amend these Terms from time to time without prior notice to you. Shops makes no commitment, express or implied, to maintain or continue any aspect of the Platform. You agree that Shops shall not be liable to You or any third party for any modification, suspension or discontinuance of the Platform/Services. All prices are subject to change without notice.</li>
                            <li>THE SERVICES AND ALL INCLUDED CONTENT ARE PROVIDED ON AN "AS IS" BASIS WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED. SHOPS SPECIFICALLY DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. SHOPS FURTHER DISCLAIMS ANY AND ALL LIABILITY RELATED TO YOUR ACCESS OR USE OF THE SERVICES OR ANY RELATED CONTENT. YOU ACKNOWLEDGE AND AGREE THAT ANY ACCESS TO OR USE OF THE SERVICES OR SUCH CONTENT IS AT YOUR OWN RISK.</li>
                        </ul>
                        <li className="bold headings">Limitation of Liability and Indemnification</li>
                        <ul className="no-list">
                            <li>To the extent permitted by law, we (and our group companies, suppliers, partners, and agents) will not be liable for any indirect, incidental, punitive, or consequential damages (including loss of data, revenue, profits, or business opportunities, or personal injury or death), whether arising in contract, warranty, tort, product liability, or otherwise, and even if we’ve been advised of the possibility of damages in advance.</li>
                            <li>You agree to defend, indemnify and hold harmless Shops, its officers, directors, employees and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) Your use of and access of the Website/Services; (ii) Your violation of any term of these Terms or any other policy of Shops; (iii) Your violation of any third party right, including without limitation, any copyright, property, or privacy right; or (iv) any claim that Your use of the Website/Services has caused damage to a third party. This defense and indemnification obligation will survive these Terms.</li>
                            <li>In no event shall the Company, its officers, directors, employees, partners or agents be liable to You or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits or any other claim arising out, of or in connection with, Your use of, or access to, the Website.</li>
                            <li>In the event of Your breach of these Terms, You agree that the Company will be irreparably harmed and may not have an adequate remedy in money or damages. The Company therefore, shall be entitled in such event to obtain an injunction against such a breach from any court of competent jurisdiction. The Company's right to obtain such relief shall not limit its right to obtain other remedies.</li>
                        </ul>
                        <li className="bold headings">Termination and Suspension:</li>
                        <ul className="no-list">
                            <li>Any violation by You of the terms of may result in immediate suspension or termination of Your Account apart from any legal remedy that Shops can avail. In such instances, SHOPS may also disclose Your Account Information if required by any Governmental or legal authority. You understand that the violation of these Terms could also result in civil or criminal liability under applicable laws.</li>
                        </ul>
                        <li className="bold headings">Miscellaneous</li>
                        <ol className="some-list">
                            <li><span className="bold">Notices:</span> All notices served by SHOPS shall be provided via email to Your account or as a general notification on the Platform. Any notice to be provided to SHOPS should be sent to <a href="mailto:support@storesnearme.in" className="link-color">support@storesnearme.in</a>.</li>
                            <li><span className="bold">Entire Agreement:</span> The Terms, along with the Privacy Policy, and any other guidelines made applicable to the Platform from time to time, constitute the entire agreement between SHOPS and You with respect to Your access to or use of the Platform, Application, Website and the Services thereof.</li>
                            <li><span className="bold">Severability:</span> If, for any reason, a court of competent jurisdiction finds any provision of the Terms, or portion thereof, to be unenforceable, that provision shall be enforced to the maximum extent permissible so as to give effect to the intent of the parties as reflected by that provision, and the remainder of the Terms shall continue in full force and effect.</li>
                            <li><span className="bold">Relief:</span> In the event of You breaching any of these Terms, You agree that SHOPS will be irreparably harmed and may not have an adequate remedy in money or damages. SHOPS therefore, shall be entitled in such event to obtain an injunction against such a breach from any court of competent jurisdiction. SHOPS 's right to obtain such relief shall not limit its right to obtain other remedies.</li>
                            <li><span className="bold">Disputes:</span> The Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Further, the Terms shall be subject to the exclusive jurisdiction of the competent courts located in Bengaluru, India and You hereby accede to and accept the jurisdiction of such Courts.</li>
                            <li><span className="bold">Review:</span> SHOPS provides these Terms so that You are aware of the terms that apply to your use of the Platform and Services. You acknowledge that SHOPS has given You a reasonable opportunity to review these Terms and that You have agreed to them.</li>
                        </ol>
                    </ol>
                </section>
                <footer className="privacy-footer">© Copyrights 2023 | All rights reserved</footer>
            </div>
        </div>

    )
}