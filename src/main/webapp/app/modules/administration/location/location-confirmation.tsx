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

export const LocationConfirmation = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">이용·제공사실 확인자료</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>대상</th>
            <th>획득목적</th>
            <th>제공서비스</th>
            <th>제공받는자</th>
            <th>이용일시</th>
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

export default LocationConfirmation;
