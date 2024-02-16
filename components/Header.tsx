
import Image from 'next/image'
import Link from 'next/link'

import HomeIcon from '../public/home-icon1.png'
import AboutIcon from '../public/about-icon1.png'
import ProjectIcon from '../public/to-do icon1.png'


export default function Header() {
    return (
        <section className='header'>
            <div className="nav-icons">
               <Link href= '/'>
                        <Image
                            className='icon home-icon' 
                            src={HomeIcon}
                            alt='home-icon'
                        />
               </Link>
               
                <Link href='/about'>
                <Image
                    className='icon about-icon' 
                    src={AboutIcon}
                    alt='about-icon'
                />
                </Link>
                
                <Link href='/projects'>
                <Image
                    className='icon project-icon' 
                    src={ProjectIcon}
                    alt='project-icon'
                />
                </Link>
                
               
            </div>
        </section>
    )
}