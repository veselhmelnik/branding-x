//--components--//
import Box from 'components/Box/Box'
//--styles and assets--//
import './serviceBox.scss'
//--data--//
import { serviceData, loremText, serviceImgs } from 'data/data'

const ServiceBox = () => {
    const title = "We’re more than just a branding agency.";
    const buttonName = 'browse all services';
    return (
        <Box title={title} buttonName={buttonName} content={<ServiceItems />}/>
    )
}

const ServiceItems = () => {
    return (
        <div className="service-list">
            {serviceData.map((item, i) => {
            return (
                <div key={i} className="service-item">
                    <div className="service-img">
                    {serviceImgs[i]}
                    </div>
                    <h4><span style={{color: '#FF7549'}}>/</span>{item}</h4>
                    <span className='service-text'>{loremText}</span>
                </div>
            )
        })}
        </div>

    )
}

export default ServiceBox