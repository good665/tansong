import React from 'react';
import './location.scss';

const data = [
  {
    대상: '○',
    획득목적: '조회',
    제공서비스: 'Android',
    제공받는자: '조회',
    이용일시: '2023-02-22 20:08:59',
  },
  {
    대상: '○',
    획득목적: '조회',
    제공서비스: 'Android',
    제공받는자: '조회',
    이용일시: '2023-02-22 20:08:59',
  },
  {
    대상: '○',
    획득목적: '조회',
    제공서비스: 'Android',
    제공받는자: '조회',
    이용일시: '2023-02-22 20:08:59',
  },
];

export const LocationAccess = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">이용·제공사실 확인자료</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>순서</th>
            <th>아이디</th>
            <th>처리내역</th>
            <th>날짜</th>
            <th>아이피</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.대상}</td>
              <td>{row.획득목적}</td>
              <td>{row.제공서비스}</td>
              <td>{row.제공받는자}</td>
              <td>{row.이용일시}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationAccess;
