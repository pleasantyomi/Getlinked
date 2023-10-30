import Hero from "./Hero"
import Introduction from "./Introduction"
import Guidelines from "./Guidelines"
import Judging from "./Judging"
import Faq from "./FAQ"
import Prizes from "./Prizes"
import Partners from "./Partners"
import Privacy from "./Privacy"

const Container = () => {
    return ( 
        <div>
             <Hero/>
             <Introduction/>
             <Guidelines/>
             <Judging/>
             <Faq/>
             <Prizes/>
             <Partners/>
             <Privacy/> 
        </div>
     );
}
 
export default Container;