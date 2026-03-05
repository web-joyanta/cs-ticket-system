import TicketCard from '../TicketCard/TicketCart';

const CustomerTickets = ({ ticketsData }) => {
    return (
        <div className="order-2 lg:order-1 lg:col-span-9">
            <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ticketsData.map(ticket => (
                    <TicketCard key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default CustomerTickets;