import Card from "./card"
import './home-content.css'
function Cardcontent(){
    return(
      <div className="card-content">
        <Card 
            title={"docker is cool"} 
            para={"DOOCKER IS COOL docker is a.."}  
            date={"Mar 17,2024"} 
            folder={"docker"}
        />
        <Card 
            title={"chad vim"} 
            para={"THE NEOVIM EDITOR vim is an awesome editor. fast, lightweight and mouse freee vim motion is the way to use vim like the keyblinding and all so we will cover all that here. VIM MODES vim has 4...."} 
            date={"Mar 17,2024"} 
            folder={"linux,vim"}
        />
        <Card 
            title={"Cats are awesome"} 
            para={"cats they are soooo cute!!!"} 
            date={"Mar 12,2024"} 
            folder={"cats , asdf, hello"}
        />
        <Card 
            title={"cats are evil"} 
            para={"they will take over humanity~~!!!!!!!!!!!!!!!!"} 
            date={"Mar 12,2024"} 
            folder={"linux"}
        />
      </div>
    )
}
export default Cardcontent;