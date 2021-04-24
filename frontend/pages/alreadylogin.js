
import { Button } from 'antd'
import Router from "next/router";
export default function AlreadyLogin() {
    const signOut = () => {
        localStorage.removeItem('accessToken')
        Router.push({
            pathname: "/",
        });
    }
    return (
        <div>
            Already Login
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}