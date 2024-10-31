import { arrowUp } from '../assets';
import styles from '../style';

const Getstared = () => (
    <div className={`${styles.flexcenter} w-[160px] p-1 h-[160px] bg-blue-gradient rounded-full cursor-pointer`}>
        <div className={`${styles.flexCenter} rounded-full bg-primary w-full h-full flex-col`}>
            <div className={`${styles.flexCenter} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'>Get </span>
                </p>
                <img src={arrowUp} alt='arrowup' className="object-contain w-[24px] h-[24px] ml-2" />
            </div>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
                    <span className='text-gradient'> started</span>
                </p>
        </div>
    </div>
);

export default Getstared;
