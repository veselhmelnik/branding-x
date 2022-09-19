//--styles and assets--//
import './box.scss'

const Box = (props) => {
    return (
        <>
            <div className='main-box'>
                <div className="main-box__header">
                    <h3>{props.title}</h3>
                    <button className='button-outline'>{props.buttonName}</button>
                </div>
                <div className="main-box__content">
                    {props.content}
                </div>
            </div>
            <div className="divider"/>
        </>
    )
}

export default Box