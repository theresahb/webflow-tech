import { useRouter } from 'next/router';
import { projects } from '../../data/data';
import { useFilter } from '../CaseStudy/context/Filter';


const CardFilterParam = () => {
  const { filter, setFilter } = useFilter();
  const router = useRouter();
  const { category } = router.query;

      setFilter(category)
  

  return (
    <div>
        {projects.map((item, index) => {
            const matchedCategories = item.categories.filter(
                (category) => category.link === filter
            );

            if ( matchedCategories.length > 0) {
            
            return (
                <div key={item.id} className="flex flex-col justify-between gap-4">
                    <div className="overflow-hidden">
                        <Image 
                        src={item.image}
                        width={500}
                        height={300}
                        objectFit='contain'
                        className="w-full transition ease-linear duration-500 delay-200 hover:scale-110" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={`case-studies/${item.link}`}>
                            <h1 className='font-bold text-secondaryColor transition ease-linear duration-400 delay-100 sx:text-xl sm:text-2xl hover:text-primaryColor'>{item.text}</h1>
                        </Link>
                        <p className='font-medium text-paragraphGray sx:text-sm sm:text-base'>{item.subtext}</p>
                    </div>
                    <div className="text-primaryColor font-medium">
                        {item.categories.map((category, categoryIndex) => (
                            <span key={categoryIndex} className='text-lg text-primaryColor hover:text-secondaryColor sx:text-base sm:text-lg'>
                                <Link href={`/${category.link}`}>{category.name}</Link>
                                {categoryIndex < item.categories.length - 1 ? " / " : ""}
                            </span>
                        ))}
                    </div>
                </div>
            )
             
          }
          return null;
        })}
    </div>
  );
};

export default CardFilterParam;