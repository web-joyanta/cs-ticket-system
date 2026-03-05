import { AiOutlineCalendar } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

const TicketCard = ({ ticket }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    return (
        <div className="card bg-base-100 shadow-md p-4">
            {/* Title + Status */}
            <div className="flex justify-between items-start">
                <h3 className="font-semibold text-sm">
                    {title}
                </h3>
                <span className={`badge rounded-2xl ${(status === "In-Progress" || status === "Resolved") ? "bg-[#F8F3B9]" : "bg-[#B9F8CF]"}`}>
                    <GoDotFill className={`text-xl ${(status === "In-Progress" || status === "Resolved") ? "text-[#FEBB0C]" : "text-[#02A53B]"}`} />{status}
                </span>
            </div>
            {/* Description */}
            <p className="text-xs text-gray-500 mt-2">
                {description}
            </p>
            {/* card footer */}
            <div className="flex justify-between items-center mt-4 text-xs">
                <div className="flex items-center font-medium gap-2">
                    <p className="text-gray-500">#{id}</p>
                    <p className={
                        priority === "HIGH PRIORITY"
                            ? "text-[#F83044]"
                            : priority === "MEDIUM PRIORITY"
                                ? "text-[#FEBB0C]"
                                : "text-[#02A53B]"
                    }>{priority}</p>
                </div>
                <div className="text-right flex items-center gap-2">
                    <p>{customer}</p>
                    <p className="flex items-center gap-1.5"><AiOutlineCalendar className="text-lg" /> {createdAt}</p>
                </div>
            </div>
        </div >
    );
};

export default TicketCard;