import { useRouter } from 'next/router';
import { FilterProvider } from '../../components/CaseStudy/context/Filter';
import Hero from '../../components/CaseStudyCategory/Hero';
import { projects } from '../../data/data';
import MetaHead from '../../shared/MetaHead/MetaHead';
import Footer from '../../shared/Footer';


const CaseCategory = () => {
    const router = useRouter();
    const { category } = router.query;
    const caseData = projects.map((project) => project.categories.find((item) => item.link) === category);
    // const caseData = projects.find((project) => project.link === category);
    console.log(caseData)

    return (
        <section>
            <div className="">
                <MetaHead  />
                <Hero data={caseData} />
                <Footer />
            </div>
        </section>
    );
};

export default CaseCategory;



// const CaseCategory = () => {
//     const router = useRouter();
//     const { category } = router.query;

//     return (
//         <FilterProvider>
//             {filterCategories.map((item, idx) => (
//                 item.value === category ? <Hero title={item} /> : ""
//             ))}
//             <div className="md:grid md:grid-flow-row-dense md:grid-cols-2  md:gap-4">
//                 <div className="md:col-start-2 ">
//                     <Success />
//                 </div>
//                 <CardFilterParam />
//                 <Mail />
//             </div>
//         </FilterProvider>
//     );
// };

// export default CaseCategory;