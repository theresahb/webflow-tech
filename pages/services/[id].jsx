import { useRouter } from 'next/router';
import React from 'react'
import { serviceDetails } from '../../data/data';
import Hero from '../../components/ServicesDetails/Hero';
import Process from '../../components/Servicess/Process';
import Projects from '../../components/Choose/Projects';
import Build from '../../components/Home/Build';
import Footer from '../../shared/Footer';
import NotFound from '../404';
import ServiceDescription from '../../components/ServicesDetails/ServiceDescription';
import MetaHead from '../../shared/MetaHead/MetaHead';

const ServiceDetails = () => {
    const router = useRouter();
    const serviceId = router.query.id;
    // const newId = parseInt(serviceId);
    console.log("serviceId:", serviceId)

    const service = serviceDetails.find((job) => job.link === serviceId);

    if (!service) {
        return (
            <NotFound />
        );
    }

    const { title, about, description, describe, track, benefits } = service;

    return (
        <section>
            <div className="">
                <MetaHead title='Services' />
                <Hero title={title} about={about} />
                <ServiceDescription description={description} describe={describe} track={track} benefits={benefits} />
                <Process />
                <Projects />
                <Build />
                <Footer />
            </div>
        </section>
    )
}

export default ServiceDetails
