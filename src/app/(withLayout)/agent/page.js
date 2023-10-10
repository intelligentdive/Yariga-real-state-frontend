import AllAgent from "@/components/agent/AllAgent";


const page = async () => {
    const res = await fetch("http://localhost:5000/all-agent");
    const agents = await res.json();
    return (
        <div>

            <div className="flex justify-between items-center">
                <h1 className="text-heading dark:text-darkHeading md:text-[25px] text-[18px] font-bold">Agent List</h1>
                <button class="flex items-center md:px-[13px] md:py-[13px] px-[10px] py-[10px] font-small tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    <svg class="w-3 h-3 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z" />
                    </svg>
                    <span class="mx-1">Add Agent</span>
                </button>
            </div>

                <div className="mt-[20px]">
                    {
                        agents?.map(agent => <AllAgent key={agent?.id} agent={agent}></AllAgent>)
                    }
                </div>

        </div>
    );
};

export default page;