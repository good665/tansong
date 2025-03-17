import React from 'react';
import './location.scss';

const accessData = [
  {
    role: '위치정보관리책임자',
    permissions: [true, true, true],
    date: '2017-01-01 11:01:12',
  },
  {
    role: '위치정보관리자',
    permissions: [true, true, false],
    date: '2022-03-25 13:51:40',
  },
  {
    role: '위치정보취급자',
    permissions: [true, false, false],
    date: '2023-03-17 10:21:57',
  },
];

export const LocationManage = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">위치정보시스템 단계별 접근권한</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>역할</th>
            <th>위치정보 조회</th>
            <th>확인자</th>
            <th>수정/삭제</th>
            <th>권한 지정일</th>
          </tr>
        </thead>
        <tbody>
          {accessData.map((row, index) => (
            <tr key={index}>
              <td>{row.role}</td>
              {row.permissions.map((perm, i) => (
                <td key={i}>{perm ? '✔️' : '❌'}</td>
              ))}
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationManage;
