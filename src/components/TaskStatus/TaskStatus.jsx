import Status from "../TicketCard/Status/Status";

const TaskStatus = ({ taskTickets, handleTaskComplete, taskResolved }) => {
    return (
        <div className="order-1 lg:order-2 lg:col-span-3 space-y-6">
            <h3 className="font-semibold mb-5">Task Status</h3>
            {/* Task status card */}
            {
                taskTickets.length > 0 ? taskTickets.map(ticket => <Status handleTaskComplete={handleTaskComplete} key={ticket.id} status={ticket} />) : <p className="text-sm text-gray-500">Select a ticket to add to Task Status</p>
            }

            <div>
                <h3 className="font-semibold mb-3">Resolved Task</h3>
                {/* resolved task */}
                {
                    taskResolved.length > 0 ? taskResolved.map(ticket => <div key={ticket.id} className="bg-[#E0E7FF] rounded-lg shadow-sm p-4 mb-6">{ticket.title}</div>) : <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                }
            </div>
        </div>
    );
};

export default TaskStatus;