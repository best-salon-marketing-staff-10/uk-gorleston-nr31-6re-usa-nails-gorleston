import { serviceList3 } from '/pages/core/info';

export default function Service3PriceList(){
    return(
        <>
            <div className="service-list-3">
                <div className="price-list-details-services">
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <h3 className="price-list-details-services-name">
                                    {serviceList3.service1}
                                </h3>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList3.service1Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList3.service1Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList3.service1Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <h3 className="price-list-details-services-name">
                                    {serviceList3.service2}
                                </h3>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList3.service2Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList3.service2Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList3.service2Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <h3 className="price-list-details-services-name">
                                    {serviceList3.service23}
                                </h3>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList3.service23Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList3.service23Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList3.service23Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <h3 className="price-list-details-services-name">
                                    {serviceList3.service3}
                                </h3>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList3.service3Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList3.service3Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList3.service3Price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}