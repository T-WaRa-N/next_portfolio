import Layout from "../components/MyLayout"
import { Image } from "react-bootstrap"


export default () => (
   <div>
        <style jsx>
            {
                `div{
                    background:rgb(2,0,36);
                    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(7,75,142,1) 35%, rgba(0,212,255,1) 100%); 
                    height: 97vh;
                    
                }
                h1, h3, p{
                    text-align:center;
                }
                img{
                    height:200px;
                    display:block;
                    margin-left: auto;
                    margin-right: auto;
                    border-radius: 5px;
                    border: 1px solid whitesmoke;
                    padding: 5px;
                }
                p{
                    margin-top:10em;
                    color: black;
                }
                `
            }
        </style>    
        <Layout>
        <img src="/static/InCar01.jpeg"/>
            <h1>Thambo W Nondabula</h1>
            <h3>Full Stack Web Developer/Engineer</h3>

            <p>let me take this opportunity to welcome you to my page and please use the navigation on your top left to learn more about me as a developer.</p>
        </Layout>   
   ​</div>
)