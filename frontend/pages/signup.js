import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [ischeck, setIscheck] = useState('')

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <form>

            <div class="segment">
                <h1>Sign up</h1>
            </div>

            <label>
                <input type="text" placeholder="Email Address" />
            </label>
            <label>
                <input type="password" placeholder="Password" />
            </label>
            <button class="red" type="button"><i class="icon ion-md-lock"></i> Log in</button>

            <div class="segment">
                <button class="unit" type="button"><i class="icon ion-md-arrow-back"></i></button>
                <button class="unit" type="button"><i class="icon ion-md-bookmark"></i></button>
                <button class="unit" type="button"><i class="icon ion-md-settings"></i></button>
            </div>

            <div class="input-group">
                <label>
                    <input type="text" placeholder="Email Address" />
                </label>
                <button class="unit" type="button"><i class="icon ion-md-search"></i></button>
            </div>

        </form>
    )

    // const copyText = () => {
    //     navigator.clipboard.writeText(token)
    // }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <div className={styles.container}>


                <div className={styles.form}>

                    {/* <div><b>Token:</b> {token.substring(0, 15)}...
                <button onClick={copyText}> Copy token </button>
                </div> */}
                    {/*                 
                <div>
                    Status:  {status}
                    check: {ischeck}
                </div> */}

                    {loginForm()}

                    <div>
                        <input type="checkbox"
                            name="IsRememberMe"
                            onChange={(e) => setIscheck(e.target.value)}
                        /> Remember me!
                    <br /><br />
                    </div>

                    <div className={styles.submit}>
                        <button onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
