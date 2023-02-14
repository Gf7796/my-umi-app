import {Link, Outlet} from 'umi';
import styles from './index.less';

export default function Layout() {
    return (
        <div className={styles.init}>
            <ul>
                <li>
                    <Link to="echarts/echarts1">echarts1</Link>
                </li>
                <li>
                    <Link to="DPFjs/index">pdf</Link>
                </li>
                <li>
                    <Link to="classDemo/index">classDemo</Link>
                </li>
            </ul>
            <div className={styles.container}>
                <Outlet/>
            </div>
        </div>
    );
}
