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
          <h1>My Projects</h1>
          <div>
          <p>I have done a couple of interesting projects thus far and I am looking forward in to doing more projects.</p>
               <h3>Interesting Projects Done</h3>
               <ul>
                   <li>Online Shopping Store</li>
                   <li>Mine Sweeper Game</li>
                   
               </ul>
               <p>To go to my Mine Sweeper Project please follow this link <a href="https://twaran-react-app.herokuapp.com/" target="_blank">Game Project</a>  </p>

          </div>    
        </Layout>
    </div>)