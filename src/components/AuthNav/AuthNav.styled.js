import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 18px;

  &.active {
    background-color: rgba(36, 111, 107, 1);
  }
`;
