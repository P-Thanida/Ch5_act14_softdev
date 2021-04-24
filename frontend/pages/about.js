import Head from 'next/head'
import React from "react";
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'



import packageJson from "../package.json";

class About extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            email: "s6135512015@phuket.psu.ac.th",
            tags: [
                "nextjs | ", 
                "react | ",
                "nodejs | ",
                "express | ",
                "axios | ",
                "vercel | ",
                "movies ",
            ],
            emailLink: "",
            changelog: "",
            version: "",
        };
    }

    componentDidMount() {
        this.setState({
            emailLink: `mailto:${this.state.email}?subject=${this.state.subject}&body=${this.state.message}`,
        });

        if (process && process.env && process.env.VERCEL_GITHUB_COMMIT_REF) {
            console.log(process.env.VERCEL_URL);
            console.log(process.env.VERCEL_GITHUB_DEPLOYMENT);
            console.log(process.env.VERCEL_GITHUB_ORG);
            console.log(process.env.VERCEL_GITHUB_REPO);
            console.log(process.env.VERCEL_GITHUB_COMMIT_ORG);
            console.log(process.env.VERCEL_GITHUB_COMMIT_REPO);
            console.log(process.env.VERCEL_GITHUB_COMMIT_REF);
            console.log(process.env.VERCEL_GITHUB_COMMIT_SHA);
            console.log(process.env.VERCEL_GITHUB_COMMIT_AUTHOR_LOGIN);
            console.log(process.env.VERCEL_GITHUB_COMMIT_AUTHOR_NAME);
            this.setState({
                changelog: process.env.VERCEL_GITHUB_COMMIT_REF,
            });
        }
        if (packageJson && packageJson.version) {
            this.setState({
                version: packageJson.version,
            });
        }
    }

    render() {
        return (

            <React.Fragment>
                <Head>
                    <title>About</title>
                </Head>
                <div className={styles.header}><div></div>Next-Movie</div>  
                <Navbar />
                <div className={styles.container}> <br></br>
                        <div>
                            <h1>Next-Movie</h1>
                            <section>
                                <h4>Version: {this.state.version || "1.0.0"}</h4>
                                <div>
                                    {this.state.tags.map((tag) => (
                                        <span
                                            key={tag}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <hr />
                            <address>
                                <p>
                                   contact me <br></br>
                                       <a href={this.state.emailLink}>
                                        {this.state.email}
                                    </a>
                                </p>
                            </address>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default About;