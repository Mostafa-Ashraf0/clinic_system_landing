import style from './loading.module.css';
import Image from 'next/image';

const Loading = ()=>{
    return(
        <div className={style.loadingContainer}>
            <Image 
            width={300}
            height={300}
            src='/male-doctor-taking-an-ok-pose-svgrepo-com.svg' 
            alt='loading'/>
            Loading please wait..
        </div>
    )
}

export default Loading;