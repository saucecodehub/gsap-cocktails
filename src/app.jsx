import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText) // use globally across application

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
        </main>
    )
}

export default App