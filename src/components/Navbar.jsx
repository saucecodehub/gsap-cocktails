import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top', // bottom of the navbar reaches the top of the viewport
                // markers: true
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent',
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    }, {})

    return (
        <nav>
            <div>
                <a href='#home' className='flex-center gap-2'>
                    <img src="/images/logo.png" alt="logo" className='w-10 h-10'></img>
                    <p>Cocktails Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar