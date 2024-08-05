import Head from 'next/head';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import ButtonViewDetailsService6 from '/pages/Components/buttons/button-view-details-service-6.js';
import { images } from '/pages/core/info';
import { imageAlt } from '/pages/core/info';
import { serviceCategory } from '/pages/core/info';
import { pageContent } from '/pages/core/info';

export default function Service6() {
    return (
        <>
            <div className="service">
                <div className="service-content">
                    <div className="service-content-anh">
                        <div className="carousel-image">
                            <img className="service-content-anh" alt={imageAlt.serviceList6Image1Alt} src={images.serviceList6Image1} />
                        </div>
                    </div>
                </div>
                <div className="service-content-text">
                    <div className="service-content-title">
                        <h2 className="service-content-title">
                            {serviceCategory.serviceCategory6}
                        </h2>
                    </div>
                    <div className="service-content-description">
                        <p className="service-content-description">
                            {pageContent.serviceCategory6Description}
                        </p>
                    </div>
                    <div className="button-view-detail-services">
                        <ButtonViewDetailsService6 />
                    </div>
                </div>
            </div>
        </>
    )
}



