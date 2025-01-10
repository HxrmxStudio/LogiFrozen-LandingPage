import { stats } from '../constants'
import styles from '../style'
import CountUp from 'react-countup';


function Stats() {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex items-center justify-start flex-row m-3`}>
                    <h4 className='font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white'><CountUp
                        start={0}
                        end={parseInt(stat.value.replace(/[^\d]/g, ''))}
                        duration={3}
                        separator=","
                        suffix={stat.value.includes('+') ? '+' : ''}
                    /></h4>
                    <p className='font-poppins font-normal xd:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 tracking-wider'>
                        {stat.title}
                    </p>

                </div>
            ))}
        </section>
    )
}

export default Stats