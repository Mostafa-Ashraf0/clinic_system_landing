import '../../style/header.css';
import Button from './Button';

const Header = ()=>{
    return(
        <header>
            <div className="container">
                <div className='img'>
                    <img src="/next.svg" alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Why</li>
                    <li>Pricing</li>
                    <li>Clients</li>
                </ul>
                <Button
                link='#'
                backgroundColor=''
                color=''
                text='Try the demo'
                backgroundImage='linear-gradient(135deg, rgb(10, 102, 194) 0%, rgb(8, 88, 168) 50%, rgb(8, 78, 150) 100%)'
                />
            </div>
        </header>
    )
};

export default Header;