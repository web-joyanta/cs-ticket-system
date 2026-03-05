import { Suspense, useState } from 'react';
import './App.css'
import DashboardCards from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import TicketList from './components/TicketList/TicketList';
import { toast, ToastContainer } from 'react-toastify';
const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
}
const ticketsPromise = fetchTickets();
function App() {
  const [taskTickets, setTaskTickets] = useState([]);

  const handleSelectedTask = (ticket) => {
    const alreadyAdded = taskTickets.some(t => t.id === ticket.id);
    if (alreadyAdded) {
      toast.error("You already selected this ticket!!");
      return;
    };
    toast.success("This ticket is selected!!");
    setTaskTickets([...taskTickets, ticket]);
  }

  return (
    <>
      <Navbar />
      <DashboardCards taskTickets={taskTickets} />
      <Suspense fallback={<span className="min-h-screen flex mx-auto items-center loading loading-spinner loading-xl"></span>}>
        <TicketList ticketsPromise={ticketsPromise} handleSelectedTask={handleSelectedTask} taskTickets={taskTickets} />
      </Suspense>
      {/* toast container */}
      <ToastContainer />
    </>
  );
}

export default App;
