import React from 'react';

function SessionSummary({ sessionData, selectedCategory }) {
  // Filter sessionData based on selectedCategory
  const filteredSessionData = selectedCategory
    ? sessionData.filter(item => item.dsoCategory === selectedCategory)
    : sessionData;

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
        {filteredSessionData.length > 0 ? (
          filteredSessionData.map((item, index) => (
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
            <td colSpan="6">No Sessions have been added</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default SessionSummary;
