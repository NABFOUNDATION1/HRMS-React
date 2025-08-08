import React, { useState } from 'react';
import {
  FaCheck,
  FaTimes,
  FaStar,
  FaUmbrella,
  FaSearch,
  FaCircle
} from 'react-icons/fa';

const AttendanceTable = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth, setSelectedMonth] = useState('July');
  const [searchTerm, setSearchTerm] = useState('');

  const attendance = [
    {
      employee_id: "EMP1001",
      employee_name: "Kedar Rane",
      date: new Date("2025-07-01"),
      month: "July", 
      year: "2025",
      remarks: "optional",
      final_attendance: "Present"
    },
    {
      employee_id: "EMP1002",
      employee_name: "Siddhesh Surve",
      date: new Date("2025-07-01"),
      month: "July",
      year: "2025",
      remarks: "optional",
      final_attendance: "Present"
    },
    {
      employee_id: "EMP1003",
      employee_name: "Anushka Pandey",
      date: new Date("2025-07-01"),
      month: "July",
      year: "2025",
      remarks: "optional",
      final_attendance: "Absent"
    }
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = ['2023', '2024', '2025'];

  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    const numOfDays = new Date(parseInt(year), monthIndex + 1, 0).getDate();
    return Array.from({ length: numOfDays }, (_, i) => i + 1);
  };

  const getWeekendDays = (month,year) => {
    const monthIndex = months.indexOf(month);
    const totalDays = getDaysInMonth(month,year);
    return totalDays.filter(day =>
    {
      const date = new Date(year,monthIndex,day);
      const dayofWeek = date.getDay();
      return dayofWeek === 0 || dayofWeek === 6;
    });
    
  };

  const weekendDays = getWeekendDays(selectedMonth,selectedYear);

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  

  const getAttendanceStatus = (employeeId, day) => {
    const record = attendance.find(entry => {
      const recordDate = new Date(entry.date);
      return (
        entry.employee_id === employeeId &&
        entry.year === selectedYear &&
        entry.month === selectedMonth &&
        recordDate.getDate() === day
      );
    });
    if(record)
    {
      return record.final_attendance.toLowerCase();
    }
    else if(weekendDays.includes(day))
    {
      return 'weekend';
    }
    else
    return 'absent';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present': return <FaCheck className="text-success" />;
      case 'absent': return <FaTimes className="text-danger" />;
      case 'leave': return <FaCircle className="text-secondary" />;
      case 'tour': return <FaUmbrella className="text-primary" />;
      case 'weekend': return <FaCircle className="text-muted" />;
      case 'holiday': return <FaStar className="text-warning" />;
      default: return <FaCircle className="text-light" />;
    }
  };

  const getStatusBgClass = (status) => {
    switch (status) {
      case 'present': return 'bg-success bg-opacity-10';
      case 'absent': return 'bg-danger bg-opacity-10';
      case 'leave': return 'bg-secondary bg-opacity-10';
      case 'tour': return 'bg-primary bg-opacity-10';
      case 'weekend': return 'bg-light';
      case 'holiday': return 'bg-warning bg-opacity-10';
      default: return 'bg-white';
    }
  };

  // Get unique employees
  const employees = [
    ...new Map(attendance.map(item => [item.employee_id, {
      employee_id: item.employee_id,
      employee_name: item.employee_name
    }])).values()
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.employee_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h2 fw-bold text-dark mb-1">View Attendance</h1>
            <p className="text-muted mb-0">Attendance Sheets</p>
          </div>
          <nav className="small text-muted">
            Attendance &gt; <span className="text-dark">Sheet</span>
          </nav>
        </div>

        {/* Filters */}
        <div className="row g-3 mb-4 align-items-end">
          <div className="col-auto">
            <label className="form-label fw-medium">Select Year</label>
            <select
              className="form-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{ width: '130px' }}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="col-auto">
            <label className="form-label fw-medium">Select Month</label>
            <select
              className="form-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              style={{ width: '160px' }}
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          <div className="col-auto ms-auto">
            <div className="position-relative">
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '200px' }}
              />
            </div>
          </div>
        </div>

        <p className="small text-muted mb-4">
          Filtered by: Year {selectedYear}, Month: {selectedMonth}
        </p>

        {/* Legend */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-wrap gap-4">
            <div className="d-flex align-items-center gap-2"><FaUmbrella className="text-primary" /><span className="small">Tour</span></div>
            <div className="d-flex align-items-center gap-2"><FaCircle className="text-secondary" /><span className="small">Weekend</span></div>
            <div className="d-flex align-items-center gap-2"><FaCheck className="text-success" /><span className="small">Present</span></div>
            <div className="d-flex align-items-center gap-2"><FaTimes className="text-danger" /><span className="small">Absent</span></div>
            <div className="d-flex align-items-center gap-2"><FaStar className="text-warning" /><span className="small">Holiday</span></div>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="card shadow">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th className="fw-semibold" style={{ width: '200px' }}>Employee Name</th>
                  {daysInMonth.map(day => (
                    <th key={day} className="text-center fw-semibold" style={{ width: '50px' }}>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.employee_id}>
                    <td className="fw-medium">
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-medium"
                          style={{
                            width: '32px',
                            height: '32px',
                            background: 'linear-gradient(135deg, #007bff, #6f42c1)',
                            fontSize: '14px'
                          }}
                        >
                          {employee.employee_name.charAt(0)}
                        </div>
                        <span>{employee.employee_name}</span>
                      </div>
                    </td>
                    {daysInMonth.map(day => {
                      const status = getAttendanceStatus(employee.employee_id, day);
                      return (
                        <td key={day} className={`text-center p-2 ${getStatusBgClass(status)}`}>
                          {getStatusIcon(status)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
