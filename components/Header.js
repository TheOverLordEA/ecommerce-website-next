import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'



import Image from 'next/image'
import EBrand from '../public/assets/images/GreenCartIcon.svg'
import HeaderItem from './HeaderItem'

const Header = () => {
    return (
        <header className=''>
        
            <Image 
            
            className='object-contain'
            src={EBrand} alt='a image'
            width={200}
            height={100}
            />
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
            </div>
        </header>
    )
}

export default Header
