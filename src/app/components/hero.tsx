import '../../style/hero.css';
import Image from 'next/image';
import coverImg from '../../../public/clinic.png';
import Section from './section';
import Button from './Button';

const Hero = ()=>{
    return(
        <Section>
            <div className='container'>
                <div className='text'>
                    <div className="trusted-box">
                        <div className="icon">
                            ✓
                        </div>

                        <span>Trusted by 100+ Clinics</span>
                    </div>
                    <h1>Organize your Clinic with Full <span>Control and Full Customization</span></h1>
                    <p>Appointments, Patient records, Analytics and staff management all in a single platform.</p>
                    <div className='btns'>
                        <Button
                        link='#'
                        backgroundColor=''
                        color=''
                        text='Try the demo now - its free'
                        backgroundImage='linear-gradient(135deg, rgb(10, 102, 194) 0%, rgb(8, 88, 168) 50%, rgb(8, 78, 150) 100%)'
                        />
                        <Button
                        link='#'
                        backgroundColor='white'
                        color='black'
                        backgroundImage='linear-gradient(
                        135deg,
                        rgb(255, 255, 255) 0%,
                        rgb(245, 247, 250) 50%,
                        rgb(230, 235, 240) 100%
                        )'
                        text='Contact us'
                        />
                    </div>
                </div>
                <div className='image'>
                    <Image
                        src={coverImg}
                        alt=''
                    />
                </div>
            </div>
        </Section>
    )
};

export default Hero;