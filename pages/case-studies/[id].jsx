import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { projects } from '../../data/data';
import Hero from '../../components/CaseStudy/Hero';
import Footer from '../../shared/Footer';
import NotFound from '../404';
import MetaHead from '../../shared/MetaHead/MetaHead';
import Navbar from '../../shared/Navbar';
import Solution from '../../components/CaseStudy/Solution';
import Navigation from '../../components/CaseStudy/Navigation';

const CaseStudiesDetails = () => {
    const liColor = 'text-secondaryColor';
    const borderColor = '[gray-200]';
    const logo = '/assets/logo.svg';
    const menuBorder = 'gray-200';

    const router = useRouter();
    const { id } = router.query;
    console.log("caseId:", id);
    const caseData = projects.find((project) => project.link === id);
    console.log(caseData)

    if (!caseData) {
        return <NotFound />;
    }

    return (
        <section>
            <div className="">
                <MetaHead title={caseData.text} />
                <Navbar liColor={liColor} borderColor={borderColor} logo={logo} menuBorder={menuBorder} />
                <Hero data={caseData} />
                <Solution data={caseData} />
                <Navigation data={caseData} id={id} />
                <Footer />
            </div>
        </section>
    );
};

export default CaseStudiesDetails;
