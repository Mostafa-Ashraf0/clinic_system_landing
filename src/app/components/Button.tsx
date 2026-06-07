'use client';
import '../../style/button.css';

type BtnProbs = {
    link: string,
    backgroundColor: string,
    backgroundImage:string,
    color: string,
    text: string
}

const Button = ({link, backgroundColor,backgroundImage, color, text}: BtnProbs)=>{
    return(
       <div className="buttons">
            <a href={link} className="primary" style={{backgroundColor:`${backgroundColor}`, color: `${color}`,backgroundImage:`${backgroundImage}`}}>
                {text}
            </a>
        </div>
    )
};

export default Button;