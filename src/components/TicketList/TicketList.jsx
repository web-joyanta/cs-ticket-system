import Tickets from "../Tickets/Tickets";
import TaskStatus from "../TaskStatus/TaskStatus";

const TicketList = ({ tickets, handleSelectedTask, taskTickets, handleTaskComplete, taskResolved }) => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 pb-10 md:pb-20">
                {/* main grid container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
                    <Tickets handleSelectedTask={handleSelectedTask} tickets={tickets} />
                    <TaskStatus taskTickets={taskTickets} handleTaskComplete={handleTaskComplete} taskResolved={taskResolved} />
                </div>
            </div>
        </div>
    );
};

export default TicketList;