'use client';
import Section from '../section';
import FeatureCard from './FeaturesCard';
import '../../../style/keyFeatures/keyFeatures.css';

const KeyFeatures = ()=>{
    const features = [
    {
      image: '/calendar-svgrepo-com.svg',
      title: 'Schedule Appointments',
      bacground: '#eaf3ff',
      description: 'Track real-time data insights effortlessly with our completely overhauled AI architecture.',
      linkText: 'Explore dashboards'
    },
    {
      image: '/medical-record-svgrepo-com.svg',
      title: 'EMR',
      bacground: '#e8faf0',
      description: 'Your clinic and user data is heavily fortified with multi-tenant isolation and role-based access.',
      linkText: 'View architecture'
    },
    {
      image: '/analytics-svgrepo-com.svg',
      title: 'Analytical Dashboard',
      bacground: '#f2eaff',
      description: 'Your clinic and user data is heavily fortified with multi-tenant isolation and role-based access.',
      linkText: 'View architecture'
    },
    {
      image: '/staff-svgrepo-com.svg',
      title: 'Staff Management',
      bacground: '#fff4e5',
      description: 'Your clinic and user data is heavily fortified with multi-tenant isolation and role-based access.',
      linkText: 'View architecture'
    },
    {
      image: '/math-plus-minus-svgrepo-com.svg',
      title: 'Medical Operations',
      bacground: '#ffecec',
      description: 'Your clinic and user data is heavily fortified with multi-tenant isolation and role-based access.',
      linkText: 'View architecture'
    },
    {
      image: '/secure-svgrepo-com.svg',
      title: 'Secure and Reliable',
      bacground: '#eaf8ff',
      description: 'Your clinic and user data is heavily fortified with multi-tenant isolation and role-based access.',
      linkText: 'View architecture'
    }
  ];

    return(
       <Section>
        <div className='features-container'>
            <div className='text-box'>
                <h2>Everything you need to run <br/> your clinic, <span>effortlessly</span></h2>
                <p>Powerful tools built to streamline your workflow, <br/> improve patient care, and grow your clinic.</p>
            </div>
            <div className='container-keyfeatures'>
                {features.map((feat, index) => (
                    <FeatureCard 
                    key={index}
                    iconBackground={feat.bacground}
                    image={feat.image}
                    title={feat.title}
                    description={feat.description}
                    />
                ))}
            </div>
          </div>
       </Section>
    )
};

export default KeyFeatures;