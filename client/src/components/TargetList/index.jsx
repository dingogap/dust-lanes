import React from 'react';

function TargetList({ targetData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Target</th>
          <th>Common Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {targetData.length > 0 ? (
          targetData.map((item, index) => (
            <tr key={index}>
              <td>{item.targetName}</td>
              <td>{item.commonName}</td>
              <td>{item.dsoCategory}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='6'>No Sessions have been added</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TargetList;
