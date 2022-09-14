//--styles and assets--//
import './greetingsBox.scss'

const GreetingsBox = () => {
    return (
        <div className='main'>
            <div className="left">
                <div className="text-info">
                    <h2>We’re a creative design agency from Los Angeles, CA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className="buttons">
                    <button className='button-primary'>contact us</button>
                    <button className='button-outline'>our projects</button>
                </div>
            </div>
            <div className="right">
                <div className="vector-img">
                    <div className="line">
                        <div className="box box-1">
                            <div className="box circle-1">

                            </div>
                            <div className="box circle-2">

                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box rectangle"></div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="box box-3">
                        </div>
                        <div className="box box-4">
                            <div className="circle-3">

                            </div>
                        </div>
                    </div>
                    <div className="line">
                        <div className="box box-5">
                            <div className="box rectangle"></div>
                        </div>
                        <div className="box box-6">
                            <div className="box circle"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GreetingsBox