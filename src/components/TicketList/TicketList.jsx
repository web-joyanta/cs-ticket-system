import { use } from "react";
import Tickets from "../Tickets/Tickets";
import TaskStatus from "../TaskStatus/TaskStatus";

const TicketList = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 pb-10 md:pb-20">
                {/* main grid container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
                    <Tickets ticketsData={ticketsData} />
                    <TaskStatus />
                </div>
            </div>
        </div>
    );
};

export default TicketList;