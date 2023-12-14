import Image from "next/image";
import Link from "next/link";

const Navigation = ({ id, data }) => {
    // // Ensure that data is an array
    // if (!Array.isArray(data)) {
    //     console.error("Data is not an array.");
    //     return null; // or handle the error in another way
    // }

    // Convert to an array if it's a single object
    const dataArray = Array.isArray(data) ? data : [data];

    const itemId = id;
    // Find the index of the item in the data array
    const currentIndex = dataArray.findIndex((item) => item.id === itemId);

    // Calculate the index of the previous and next items with modulus
    const prevIndex = (currentIndex - 1 + dataArray.length) % dataArray.length;
    const nextIndex = (currentIndex + 1) % dataArray.length;

    // Get the  previous, and next items
    const nextItem = dataArray[prevIndex];
    const prevItem = dataArray[nextIndex];

    console.log('prevItem:', prevItem);
    console.log('nextItem:', nextItem);

    return (
        <section>
            <div className="border-t border-b border-gray-300 md:flex my-20 ">
                <div className="md:w-2/5 flex justify-center item-center">
                    <Link href={`/case-studies/${prevItem.link}`}>
                        <div className="flex items-center gap-2 py-12">
                            <div className="rotate-180">
                                <Image src={'/assets/arrow-right.svg'} alt="" width={17} height={17} />
                            </div>
                            <p className="font-medium text-secondaryColor">{prevItem.text}</p>
                        </div>
                    </Link>
                </div>
                <div className="md:w-1/5 border-l border-r border-gray-300 flex justify-center item-center">
                    <div className="my-12">
                        <Image src={'/assets/ep-menu.svg'} width={30} height={30} />
                    </div>
                </div>
                <div className="md:w-2/5 flex justify-center item-center">
                    <Link href={`/case-studies/${nextItem.link}`}>
                        <div className="flex items-center gap-2 py-12">
                            <p className="font-medium text-secondaryColor">{nextItem.text}</p>
                            <div className="">
                                <Image src={'/assets/arrow-right.svg'} alt="" width={17} height={17} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navigation
