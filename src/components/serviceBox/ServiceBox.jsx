//--styles and assets--//
import './serviceBox.scss'
//--data--//
import { serviceData, loremText, serviceImgs } from 'data/data'

const ServiceBox = () => {
    return (
        <div className='service-main'>
            <div className="service-top">
                <h3>We’re more than just a branding agency.</h3>
                <button className='button-outline'>browse all services</button>
            </div>
            <div className="service-list">
                    <ServiceItems />
                </div>
        </div>
    )
}

const ServiceItems = () => {
    return (
        serviceData.map((item, i) => {
            return (
                <div key={i} className="service-item">
                    <div className="service-img">
                    {serviceImgs[i]}
                    </div>
                    <h4><span style={{color: '#FF7549'}}>/</span>{item}</h4>
                    <span className='service-text'>{loremText}</span>
                </div>
            )
        })

    )
}

export default ServiceBox