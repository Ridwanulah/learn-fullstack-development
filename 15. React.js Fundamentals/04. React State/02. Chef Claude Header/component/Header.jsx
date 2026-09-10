import imgURL from "./img/chef-claude-logo.png"
export function Header(){
    return (
        <header>
            <img src={imgURL}/>
            <h1>Chef Claude</h1>
        </header>
    )
}
