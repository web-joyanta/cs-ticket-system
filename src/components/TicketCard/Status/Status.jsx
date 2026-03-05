
const Status = ({ status, handleTaskComplete }) => {
    return (
        <div className="card bg-base-100 shadow-md p-4">
            <p className="text-sm mb-3">{status.title}</p>
            <button onClick={() => handleTaskComplete(status)} className="btn text-white bg-[#02A53B] btn-sm w-full">
                Complete
            </button>
        </div>
    );
};

export default Status;