import React from 'react';
import generateDatesForMonth from './generateDatesForMonths';
import './attendance.css'

const members = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const dates = generateDatesForMonth()

export default function AttendanceSheets() {
  return (
      <table className='AdttendanaceTable'>
        <thead>
          <tr>
            <th>Member Name</th>
            {dates.map((date, index) => (
              <th key={index}>{date.split('-')[2]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              {dates.map((date, index) => (
                <td key={index}>
                  {/* Optionally add attendance data or input here */}
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
}
