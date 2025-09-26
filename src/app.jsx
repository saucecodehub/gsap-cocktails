import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'
import About from './components/About'
import Art from './components/Art'
import Menu from './components/Menu'
import Contract from './components/Contract'

gsap.registerPlugin(ScrollTrigger, SplitText) // use globally across application

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <About />
            <Art />
            <Menu />
            <Contract />
        </main>
    )
}

export default App