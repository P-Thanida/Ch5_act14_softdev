import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"



export default function movie() {
    const { query: { movie },
    } = useRouter();
    return (
        <Layout>
            <Head>
                <title>Movie</title>
            </Head>
            <div className={styles.container}> <br></br>
                <Navbar />
                <h1>{movie}</h1>
                <motion.img 
                layoutId={movie}
                className={styles.image2} 
                src={movie + ".jpg"} />
        </div>
        </Layout>
    );
}

