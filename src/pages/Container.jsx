import Hero from "./Hero"
import Introduction from "./Introduction"
import Guidelines from "./Guidelines"
import Judging from "./Judging"
import Faq from "./FAQ"
import Prizes from "./Prizes"
import Partners from "./Partners"
import Privacy from "./Privacy"
//import Timeline from "./Timeline"
const Container = () => {
    return ( 
        <div>
             <Hero/>
             <Introduction/>
             <Guidelines/>
             <Judging/>
             <Faq/>
             //<Timeline/>
             <Prizes/>
             <Partners/>
             <Privacy/> 
        </div>
     );
}
 
export default Container;