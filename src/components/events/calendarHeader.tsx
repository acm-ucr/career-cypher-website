const UpcomingHeader = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-white to-[#f5f0fb] px-6 py-4">
      <h2 className="font-poppins text-xl text-[3vw] text-black">
        Upcoming Events
      </h2>
      <a
        href="https://example.com/appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cypher-blue rounded-md px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-blue-500"
      >
        Make an Appointment
      </a>
    </div>
  );
};

export default UpcomingHeader;
