//--styles and assets--//
import './serviceBox.scss'
//--data--//
import { serviceData, loremText } from 'data/data'

const ServiceBox = () => {
    return (
        <div className='service-main'>
            <div className="top">
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
        serviceData.map(item => {
            return (
                <div className="service-item">
                    <div className="service-img">

                    </div>
                    <h4>{item}</h4>
                    <span>{loremText}</span>
                </div>
            )
        })

    )
}

export default ServiceBox