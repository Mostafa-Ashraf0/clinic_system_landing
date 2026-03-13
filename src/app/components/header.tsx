import '../../style/header.css';

const Header = ()=>{
    return(
        <header>
            <div className="container">
                <div className='img'></div>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Why</li>
                    <li>Pricing</li>
                    <li>Clients</li>
                </ul>
            </div>
        </header>
    )
};

export default Header;