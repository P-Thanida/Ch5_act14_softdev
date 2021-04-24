import Link from 'next/link'

import styles from '../styles/Home.module.css'
import {
    Button
    , Card
    , Row, Col
} from 'antd'
import renderEmpty from 'antd/lib/config-provider/renderEmpty'




export default function Navbar(props) {

    return (
        <Card className={styles.nav}>
            <Row type="flex">
                <Col span={8}>
                    <h1>Next-Movies</h1>
                </Col>
                <Col span={8}>
                    <h1 >New Movie</h1>
                </Col>
                <Col span={8}>

                    <Button onClick={() => props.register()} className={styles.userButton} type="primary">Register</Button>
                    <Button onClick={() => props.login()} className={styles.userButton} type="primary">Login</Button>

                </Col>
            </Row>,


        </Card>
    )

}
