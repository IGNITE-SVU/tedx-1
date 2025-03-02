import React from 'react';
import { FaMusic, FaUserAlt, FaCoffee } from 'react-icons/fa';

const Schedule = () => {
  const scheduleItems = [
    { title: "Welcome", time: "9:00 AM - 9:40 AM", icon: <FaUserAlt /> },
    { title: "Speaker 1: [Speaker Name]", time: "9:40 AM - 10:10 AM", icon: <FaUserAlt /> },
    { title: "Speaker 2: [Speaker Name]", time: "10:10 AM - 10:40 AM", icon: <FaUserAlt /> },
    { title: "Speaker 3: [Speaker Name]", time: "10:40 AM - 11:10 AM", icon: <FaUserAlt /> },
    { title: "Break", time: "11:10 AM - 11:40 AM", icon: <FaCoffee /> },
    { title: "Speaker 4: [Speaker Name]", time: "11:40 AM - 12:10 PM", icon: <FaUserAlt /> },
    { title: "Speaker 5: [Speaker Name]", time: "12:10 PM - 12:40 PM", icon: <FaUserAlt /> },
    { title: "Lunch Break", time: "12:40 PM - 2:10 PM", icon: <FaCoffee /> },
    { title: "Speaker 6: [Speaker Name]", time: "2:10 PM - 2:40 PM", icon: <FaUserAlt /> },
    { title: "Speaker 7: [Speaker Name]", time: "2:40 PM - 3:10 PM", icon: <FaUserAlt /> },
    { title: "Break", time: "3:10 PM - 3:40 PM", icon: <FaCoffee /> },
    { title: "Speaker 8: [Speaker Name]", time: "3:40 PM - 4:20 PM", icon: <FaUserAlt /> },
    { title: "Speaker 9: [Speaker Name]", time: "4:20 PM - 5:00 PM", icon: <FaUserAlt /> },
    { title: "Closing Remarks", time: "5:00 PM - 5:30 PM", icon: <FaUserAlt /> },
    { title: "Music Concert", time: "5:30 PM - 7:30 PM", icon: <FaMusic /> },
  ];

  return (
    <section className="bg-black text-white py-12 p-3 relative">
      <div className="container mx-auto flex flex-col justify-center h-full">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">TEDx Event Schedule</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute w-1 bg-red-500 h-full top-0 left-1/2 transform -translate-x-1/2 z-0"></div>

          {/* Timeline Items */}
          <ul className="relative z-10">
            {scheduleItems.map((item, index) => (
              <li key={index} className={`timeline-item mb-8 flex justify-between items-center w-full`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 border border-white p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-red-900">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="mt-1 text-sm">{item.time}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-1 w-5/12 border border-red-500 p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:bg-red-900">
                      <div className="text-2xl">{item.icon}</div>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                      <p className="mt-1 text-sm">{item.time}</p>
                    </div>
                    <div className="order-1 w-5/12"></div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
