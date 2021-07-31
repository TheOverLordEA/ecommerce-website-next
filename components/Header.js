import Image from 'next/image'
import EBrand from '../public/assets/images/GreenCartIcon.svg'

const Header = () => {
    return (
        <header className=''>
        
            <Image 
            
            className='object-contain'
            src={EBrand} alt='a image'/>
        </header>
    )
}

export default Header
