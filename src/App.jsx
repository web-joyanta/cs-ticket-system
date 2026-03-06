import { useEffect, useState } from 'react';
import './App.css'
import DashboardCards from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import TicketList from './components/TicketList/TicketList';
import { toast, ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';

function App() {
  const [tickets, setTickets] = useState([]);
  const [taskTickets, setTaskTickets] = useState([]);
  const [taskResolved, setTaskResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("tickets.json");
      const data = await res.json();
      setTickets(data);
      setLoading(false);
    }
    fetchTickets();
  }, []);

  const handleSelectedTask = (ticket) => {
    const alreadyAdded = taskTickets.some(t => t.id === ticket.id);
    if (alreadyAdded) {
      toast.error("You already selected this ticket!!");
      return;
    };
    toast.success("This ticket is selected!!");
    setTaskTickets([...taskTickets, ticket]);
  };

  const handleTaskComplete = (ticket) => {
    setTaskResolved([...taskResolved, ticket]);
    const taskCompleted = taskTickets.filter(task => task.id !== ticket.id);
    setTaskTickets(taskCompleted);
    const remainingTickets = tickets.filter(t => t.id !== ticket.id);
    setTickets(remainingTickets);
    toast.success("Ticket resolved completed!!")
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <DashboardCards taskTickets={taskTickets} taskResolved={taskResolved} />
      <TicketList tickets={tickets} handleSelectedTask={handleSelectedTask} taskTickets={taskTickets} handleTaskComplete={handleTaskComplete} taskResolved={taskResolved} />
      <Footer />
      {/* toast container */}
      <ToastContainer />
    </>
  );
}

export default App;
