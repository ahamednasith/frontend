import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import './index.css';
import { Helmet } from "react-helmet";


export default function Template() {
    const [template, setTemplate] = useState('');
    const [preview,setPreview] = useState([]);
    const [temp,setTemp] = useState('');
    const [verify,setVerify] = useState('');
    const [style, setStyle] = useState('');
    const [fetchId,setFetchId] = useState('');
    const [load,setLoad] = useState(false);

    const getBanner = async () => {
        let tempId = 0;
        let verifyId = 0;
        let type = "";
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('tempId')) {
            tempId = urlParams.get('tempId');
            type = "template";
            setStyle(type);
            setTemp(tempId);
            setVerify(verifyId);
        } else if (urlParams.get('previewId')) {
            tempId = urlParams.get('previewId');
            verifyId = urlParams.get('verifyId');
            type = "preview";
            setStyle(type);
            setTemp(tempId);
            setVerify(verifyId);
            getPreview(tempId,type,verifyId,0);
        }
        try {
            const response = await axios.post(`https://pepzoondev.hifrds.com/api/v3/shopDashboard/getTemplateDetail`, {tempId:tempId,type:type,verifyId:verifyId,});
            const templates = response.data;
            const count = templates.length;
            if (count === 0) {
                Navigate('/error');
            }
            setTemplate(response.data);
        } catch (error) {
            toast.error('Error fetching profile:', error.message);
        }
    };
    const getPreview = async (tempId,type,verifyId,fetchId) =>{
        try {
            const counteraction  = await axios.post("https://pepzoondev.hifrds.com/api/v3/shopDashboard/getPreviewProduct",
            {
                tempId:tempId,
                type:type,
                verifyId:verifyId,
                fetchId:fetchId
            });
            setPreview(counteraction.data);
            if(counteraction.data.length === 6){
                const Id = counteraction.data[counteraction.data.length - 1].id;
                setFetchId(Id);
                setLoad(true);
            } else{
                setLoad(false);
            }
        } catch (error) {
            toast.error('Error fetching profile:', error.message);
        }
    };
    useEffect(()=>{
        getBanner();
    },[]);
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shops Template</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            </Helmet>
            <div>
                {template && template.map((template, index) => (
                    <section key={index} className="banner" style={{
                        backgroundImage: `url(https://d1whtbopipnjq0.cloudfront.net/shopTemplate/${template.backgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        borderRadius: "0px 0px 40px 40px"
                    }}>
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col-md-5 leftcolumn">
                                    <h3>{template.heading}</h3>
                                    <p>{template.description}</p>
                                    <button className="btn">{template.buttonText}</button>
                                </div>
                                <div className="col-md-7">
                                    <img src={`https://d1whtbopipnjq0.cloudfront.net/shopTemplate/${template.mainImage}`} alt="Main" className="mainImage" />
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
                {style === "template" ? (
                    <section className="product">
                        <div className="container py-5">
                            <h1 className="pb-4"> Products </h1>
                            <div className="row">
                                {(() => {
                                    const videos = [];
                                    for (let i = 1; i <= 6; i++) {
                                        videos.push(
                                            <div className="col-sm-6 col-md-4 p-2 p-sm-3 p-lg-4" key={i}>
                                                <video src={`https://d1whtbopipnjq0.cloudfront.net/shopVideo/shopTemplateVideo${i}.mp4`} autoPlay loop muted></video>
                                            </div>
                                        );
                                    }
                                    return videos;
                                })()}
                            </div>
                        </div>
                    </section>
                ) : (
                    style === "preview" && (
                        <section className="product">
                            <div className="container py-5">
                                <h1 className="pb-4"> Products </h1>
                                <div className="row">
                                    {preview && preview.map((preview, index) => (
                                        <div class="col-sm-6 col-md-4 p-2 p-sm-3 p-lg-4" key={index}>
                                            <video src={`https://d1whtbopipnjq0.cloudfront.net/shopVideo/${preview.videoFilename}`} autoPlay loop muted></video>
                                        </div>
                                    ))}
                                    {load && fetchId && (
                                    <div className="loadMore">
                                        <div onClick={() => getPreview(temp,style,verify,fetchId)}>Load More</div>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    )
                )}
                <section className="footer">
                    <div className="container">
                        <div className="row">

                        </div>
                    </div>
                </section>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" ></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" ></script>
            <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"> </script>
        </div>
    )

}