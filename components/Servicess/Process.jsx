import React from 'react'

const Process = () => {
    // #2b1343
    return (
        <section>
            <div className="flex lg:justify-center lg:items-center bg-[#2b1343] py-20 sx:flex-col sx:gap-14 sx:px-4 lg:flex-row lg:gap-0 lg:px-12">
                <div className="flex flex-col gap-4 md:w-[50%] lg:w-[40%]">
                    <h1 className="text-white font-bold sx:text-lg md:text-5xl">Working process</h1>
                    <p className="text-white font-medium">
                        Our IT consulting process is a systematic journey comprising four stages: Assessment and Analysis, 
                        Planning, Implementation and Execution, and Monitoring and Optimization.
                    </p>
                </div>
                <div className="grid sx:grid-cols-1 justify-items-center items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-center gap-2 text-center p-4 text-white bg-[#ffffff09] border border-[#ffffff33] w-[20rem] h-[20rem] rounded-full md:mr-40 lg:m-0">
                        <h1 className="font-bold sx:text-lg md:text-5xl">01</h1>
                        <h3 className="font-semibold sx:text-base md:text-2xl">Analysis and Planning</h3>
                        <p className="font-medium sx:text-sm md:text-base">The process begins by thoroughly understanding the client's  objectives.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 text-center p-4 text-white bg-[#ffffff09] border border-[#ffffff33] w-[20rem] h-[20rem] rounded-full md:ml-40 lg:ml-0 lg:mt-14">
                        <h1 className="font-bold sx:text-lg md:text-5xl">02</h1>
                        <h3 className="font-semibold sx:text-base md:text-2xl">Current State Evaluation</h3>
                        <p className="font-medium sx:text-sm md:text-base">Assess the client's existing IT infrastructure, systems, and processes</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 text-center p-4 text-white bg-[#ffffff09] border border-[#ffffff33] w-[20rem] h-[20rem] rounded-full md:mr-40 lg:m-0">
                        <h1 className="font-bold sx:text-lg md:text-5xl">03</h1>
                        <h3 className="font-semibold sx:text-base md:text-2xl">Implementation and Execution</h3>
                        <p className="font-medium sx:text-sm md:text-base">Execute the project plan, which may involve deploying new software, hardware, or IT processes.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 text-center p-4 text-white bg-[#ffffff09] border border-[#ffffff33] w-[20rem] h-[20rem] rounded-full md:ml-40 lg:ml-0 lg:mt-14">
                        <h1 className="font-bold sx:text-lg md:text-5xl">04</h1>
                        <h3 className="font-semibold sx:text-base md:text-2xl">Evaluation and Maintenance</h3>
                        <p className="font-medium sx:text-sm md:text-base">Assess the results of the implemented solutions against the predefined goals</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
