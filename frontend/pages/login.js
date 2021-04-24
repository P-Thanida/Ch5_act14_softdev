import Head from 'next/head'
import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import Router from "next/router";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'

export default function Login({ token }) {
    useEffect(() => {
        let accesstoken = localStorage.getItem('accessToken')
        if (accesstoken !== null) {
            Router.push({
                pathname: "/alreadylogin",
            });
        }
    }, [])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [ischeck, setIscheck] = useState('')

    // const Homepage = () =>
    //     Router.push({
    //         pathname: "/",
    //     });

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
            if (token != null) {
                localStorage.setItem('accessToken', token)
                Router.push({
                    pathname: "/alreadylogin",
                });
            }
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div class="login-box">
            <h1>Login</h1>
            <form>
                <div class="user-box">
                    <input type="text"
                        name="" required=""
                        onChange={(e) => setUsername(e.target.value)}></input>
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password"
                        name="" required="" onChange={(e) => setPassword(e.target.value)}></input>
                    <label>Password</label>
                </div>
                <a onClick={() => login()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                         Submit
                    </a>

            </form>
        </div>
    )



    // const copyText = () => {
    //     navigator.clipboard.writeText(token)
    // }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>


            {/* <div><b>Token:</b> {token.substring(0, 15)}...
                <button onClick={copyText}> Copy token </button>
                </div> */}
            {/*                 
                <div>
                    Status:  {status}
                    check: {ischeck}
                </div> */}

            {loginForm()}

            {/* <div>
                    <input type="checkbox"
                        name="IsRememberMe"
                        onChange={(e) => setIscheck(e.target.value)}
                    /> Remember me!
                    <br /><br />
                </div> */}

            {/* <div className={styles.submit}>
                    <button onClick={login}>Login</button>
                </div> */}

        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
