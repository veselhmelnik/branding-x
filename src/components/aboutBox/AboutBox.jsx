//--styles and assets--//
import img1 from 'assets/images/about-img-1.png'
import './aboutBox.scss'
//--data--//
import { aboutText } from 'data/data'

const AboutBox = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <h3>Our agency started back in 2002</h3>
                <button className='button-outline'>More About Us</button>
            </div>
            <div className="about-content">
                <div className="about-content-text">
                    {aboutText}
                </div>
                <div className="box box-4">
                    <div className="circle-3">
                    </div>
                </div>
                <img src={img1} alt="img1" />
            </div>
        </div>

    )
}

export default AboutBox