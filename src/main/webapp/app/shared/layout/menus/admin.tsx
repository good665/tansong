import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

const adminMenuItems = () => (
  <>
    <MenuItem icon="users" to="/admin/user-management">
      사용자 관리
    </MenuItem>
    <MenuItem icon="tachometer-alt" to="/admin/metrics">
      메트릭스
    </MenuItem>
    <MenuItem icon="heart" to="/admin/health">
      상태 확인
    </MenuItem>
    <MenuItem icon="cogs" to="/admin/configuration">
      설정
    </MenuItem>
    <MenuItem icon="tasks" to="/admin/logs">
      로그
    </MenuItem>
    <MenuItem icon="users" to="/admin/location">
      위치정보시스템 단계별 접근권한
    </MenuItem>
    <MenuItem icon="users" to="/admin/location/confirmation">
      위치정보 확인자료
    </MenuItem>
    <MenuItem icon="users" to="/admin/location/access">
      위치정보 시스템 접속 기록
    </MenuItem>
    <MenuItem icon="users" to="/admin/location/location-expiredate">
      위치정보 시스템 권한 및 삭제 예정일
    </MenuItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
  </>
);

const openAPIItem = () => (
  <MenuItem icon="book" to="/admin/docs">
    API
  </MenuItem>
);

export const AdminMenu = ({ showOpenAPI }) => (
  <NavDropdown icon="users-cog" name="관리자" id="admin-menu" data-cy="adminMenu">
    {adminMenuItems()}
    {showOpenAPI && openAPIItem()}
  </NavDropdown>
);

export default AdminMenu;
