import Link from 'next/link'
import HamburgerIcon from '../../../public/images/index'

import {
    NavWrapper,
    Links,
    NavLink,
    PopOut
} from './index.style'

const Nav = () => {
    return (
        <NavWrapper>
            <Links>
                <NavLink>
                    <Link href='/'>Home</Link>
                </NavLink>
                <NavLink>
                    <Link href='/about'>About</Link>
                </NavLink>
                <NavLink>
                    <Link href='/blog'>Blog</Link>
                </NavLink>
            </Links>
            <PopOut>
                <HamburgerIcon />
            </PopOut>
        </NavWrapper>
    );
};

export default Nav;