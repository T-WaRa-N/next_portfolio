import Link from "next/link"
import Layout from "../components/MyLayout"

export default () => (

    <div>
        <style jsx>
            {
                `div{
                    background:background: rgb(2,0,36);
                    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(7,75,142,1) 35%, rgba(0,212,255,1) 100%); 
                    height: 97vh;
                    
                }
                h1, h3{
                    text-align:center;
                }`
            }
        </style>   
        <Layout>
          <h1>About Myself</h1>
          <div>
          <p>I started learning about Full Stack Web Development late 2020 and I am enjoying the learning experience. I have acquired 
              web application programming skills and I am looking forward in real life applications.</p><br/>
              <p>About my education history, I have B Sc. Electrical Engineering and a National Diploma in Electrical Engineering. Learning Full Stack Web 
                  Development will come in very resourceful in my future endeavours. I have worked for several companies mostly as a Technician but now
                  I am working as Engineer in a Telecomunication Company</p> 
               <h3>Programming Skills Acquired As A Developer Student</h3>
               <ul>
                   <li>HTML</li>
                   <li>CSS</li>
                   <li>Javascript</li>
                   <li>ReactJS</li>
                   <li>NodeJS</li>
                   <li>Express</li>
                   <li>NextJS</li>
               </ul>
               <p>I am  still in the learning process but I am confident enough into starting and finishing a small project successfully. I am an Electrical
                   Engineer by profession and I am looking found in combining the skills I have with my developer skill.<br/>
                   My passion is automation and to render scalable business solution for maximised business profit.
               </p>

          </div>    
    
        </Layout>
    </div>)