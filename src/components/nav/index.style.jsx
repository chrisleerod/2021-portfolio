import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavWrapper = styled.nav``;

export const Links = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled.li`
  color: #FAFAFA;
  font-size: 16px;
  margin-right: 32px;
`;

export const PopOut = styled(motion.div)`
  padding: 8px;
  border-radius: 4px;
`;