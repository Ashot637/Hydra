import React, { useRef } from 'react'
import About from '../About/About';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header';
import InfoPanel from '../InfoPanel/InfoPanel';
import Intro from '../Intro/Intro';
import Introduction from '../Introduction/Introduction';
import Process from '../Process/Process';
import TechList from '../TechList/TechList';
import Technologies from '../Technologies/Technologies';
import DataContext from '../../context/context';

const App = () => {
    const aboutRef = useRef();
    const servicesRef = useRef();
    const techRef = useRef();
    const howtoRef = useRef();
    const formRef = useRef();

    const handleScroll = (el) => {
        // el.current?.scrollIntoView({ behavior: 'smooth' });
        window.scrollTo({ top: el.current?.offsetTop - 150, behavior: 'smooth' })
    }

    return (
        <DataContext.Provider value={{ aboutRef, servicesRef, techRef, howtoRef, formRef, handleScroll }}>
            <Header />
            <Intro />
            <InfoPanel />
            <Introduction title={'INTRODUCTION'} subtitle={'TO HYDRA VR'} />
            <About />
            <Introduction title={'WHY BUILD'} subtitle={'WITH HYDRA?'} />
            <Cards />
            <Technologies />
            <TechList />
            <Introduction title={'HOW WE BUILD'} subtitle={'WITH HYDRA VR?'} />
            <Process />
            <Form />
            <Footer />
        </DataContext.Provider>
    )
}

export default App;