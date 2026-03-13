import '../../style/hero.css';
import Image from 'next/image';
import coverImg from '../../../public/clinic.png';

const Hero = ()=>{
    return(
        <section className='hero-section'>   
            <div className='container'>
                <div className='text'>
                    <h1>Organize your clinic with full control</h1>
                    <p>A simple clinic management system to manage patients, appointments, and medical records efficiently.</p>
                    <a className='main-btn'>Purchase Now</a>
                </div>
                <div className='image'>
                    <Image
                        src={coverImg}
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
};

export default Hero;