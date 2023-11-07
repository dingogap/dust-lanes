import React from 'react';

function SessionSummary({ sessionData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Target Name</th>
          <th>Common Name</th>
          <th>Date</th>
          <th>Category</th>
          <th>Telescope</th>
          <th>Camera</th>
        </tr>
      </thead>
      <tbody>
        {sessionData.length > 0 ? (
          sessionData.map((item, index) => (
            <tr key={index}>
              <td>{item.targetName}</td>
              <td>{item.commonName}</td>
              <td>{item.sessionDate}</td>
              <td>{item.dsoCategory}</td>
              <td>{item.telescope}</td>
              <td>{item.camera}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default SessionSummary;
