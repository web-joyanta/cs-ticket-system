
const TaskStatus = () => {
    return (
        <div className="order-1 lg:order-2 lg:col-span-3 space-y-6">
            <h3 className="font-semibold mb-5">Task Status</h3>
            {/* card 1 */}
            <div className="card bg-base-100 shadow-md p-4">
                <p className="text-sm mb-3">Payment Failed - Card Declined</p>
                <button className="btn text-white bg-[#02A53B] btn-sm w-full">
                    Complete
                </button>
            </div>
            {/* card 2 */}
            <div className="card bg-base-100 shadow-md p-4">
                <p className="text-sm mb-3">Payment Failed - Card Declined</p>
                <button className="btn text-white bg-[#02A53B] btn-sm w-full">
                    Complete
                </button>
            </div>

            <div>
                <h3 className="font-semibold mb-3">Resolved Task</h3>
                {/* <p className="text-sm">
                                No resolved tasks yet.
                            </p> */}
                {/* card */}
                <div className="card bg-base-100 shadow-md p-4">
                    <p className="text-sm mb-3">Payment Failed - Card Declined</p>
                    <button className="btn text-white bg-[#02A53B] btn-sm w-full">
                        Complete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;