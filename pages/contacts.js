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
          <h1>Contacts</h1>
          <div>
          <p>I am available in social media plaforms and emails</p>
               <h3>Find Me On</h3>
               <ul>
                   <li>Facebook</li>
                   <li>Linkedin</li>
                   <li>Twitter</li>
                   <li>nondabulat@gmail.com</li>   
               </ul>
               

          </div>
    
        </Layout>
    </div>)