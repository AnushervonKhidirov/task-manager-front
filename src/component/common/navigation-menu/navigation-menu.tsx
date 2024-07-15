import Link from 'next/link'

import { useMenuStore } from '@store/menu'

import getClassNames from '@helper/multiple-classes'

import { navigationList } from './constant'
import styles from './navigation-menu.module.css'

const NavigationMenu = () => {
    const { isOpened, close } = useMenuStore(state => state)

    return (
        <nav
            id='main-navigation'
            className={getClassNames({ active: { isActive: isOpened, activeClass: 'active' } })}
        >
            <div className={styles.navigation_inner}>
                {navigationList.map(navigationItem => (
                    <Link onClick={close} href={navigationItem.link} key={nameToId(navigationItem.name)}>
                        {navigationItem.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

function nameToId(name: string): string {
    return name.toLocaleLowerCase().replace(' ', '_')
}

export default NavigationMenu
