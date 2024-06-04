import Link from 'next/link'
import { navigationList } from './constant'
import { useAppSelector } from '@hook/store'

import styles from './navigation-menu.module.css'

const NavigationMenu = () => {
    const state = useAppSelector(state => state.menu)

    return (
        <nav id='main-navigation' className={state.isOpened ? 'active' : ''}>
            <div className={styles.navigation_inner}>
                {navigationList.map(navigationItem => (
                    <Link href={navigationItem.link} key={nameToId(navigationItem.name)}>
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
