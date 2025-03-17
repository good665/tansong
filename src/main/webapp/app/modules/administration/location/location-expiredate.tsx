import React, { useEffect, useState } from 'react';
import './location.scss';

// useEffect(() => {
//   fetchLogs();
//   const interval = setInterval(fetchLogs, 5000); // 5초마다 갱신
//   return () => clearInterval(interval);
// }, []);

// const fetchLogs = async () => {
//   const response = await fetch('/api/locationLogs'); // 변경: 절대 URL 대신 상대 경로 사용
//   const data = await response.json();
//   setLogs(data);
// };

// const addLog = async () => {
//   await fetch('/api/locationLogs', { method: 'POST' }); // 변경: API 경로 사용
//   fetchLogs();
// };

export const LocationExpire = () => {
  return (
    <div className="table-container">
      <table className="location-access-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>메시지</th>
            <th>생성 날짜</th>
            <th>삭제 예정일</th>
            <th>상태</th>
          </tr>
        </thead>
        {/* <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.message}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
              <td>{new Date(log.deletionDate).toLocaleString()}</td>
              <td className={log.status === 'success' ? 'status-success' : 'status-error'}>{log.status}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default LocationExpire;
