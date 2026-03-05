import { Suspense } from 'react';
import './App.css'
import DashboardCards from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import TicketList from './components/TicketList/TicketList';
import { HiH1 } from 'react-icons/hi2';
const fetchTickets = async () => {
  const res = await fetch("tickets.json");
  return res.json();
}
const ticketsPromise = fetchTickets();
function App() {

  return (
    <>
      <Navbar />
      <DashboardCards />
      <Suspense fallback={<span className="min-h-screen flex mx-auto items-center loading loading-spinner loading-xl"></span>}>
        <TicketList ticketsPromise={ticketsPromise} />
      </Suspense>
    </>
  );
}

export default App;
