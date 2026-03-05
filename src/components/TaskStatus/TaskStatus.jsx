import Status from "../TicketCard/Status/Status";

const TaskStatus = ({ taskTickets }) => {
    return (
        <div className="order-1 lg:order-2 lg:col-span-3 space-y-6">
            <h3 className="font-semibold mb-5">Task Status</h3>
            {/* Task status card */}
            {
                taskTickets.length > 0 ? taskTickets.map(ticket => <Status key={ticket.id} status={ticket} />) : <p className="text-sm text-gray-500">Select a ticket to add to Task Status</p>
            }

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