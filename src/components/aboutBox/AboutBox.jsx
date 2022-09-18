//--styles and assets--//
import img1 from 'assets/images/about-img-1.png'
import img2 from 'assets/images/about-img-2.png'
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
            <div className="wrapper">
            <div className="about-content">
                <div className="about-content-text">
                    {aboutText}
                </div>
                <div className='about-content-right'>
                    <img id="img2" src={img2} alt="img2" />
                    <div className="box box-4">
                        <div className="circle-3">
                        </div>
                    </div>
                    <img id="img1" src={img1} alt="img1" />
                    <div className="box-5" />
                    <div className="box-6" />
                    <div className="box-7" />
                    <div className="box box-8">
                        <div className="circle-4">
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="bottom-text">
                    {aboutText}
                </div>
        </div>

    )
}

export default AboutBox