import troll from "../img/Troll-Face.png"

export default function Header(){
    return (
        <header className="header">
            <img className="logo"src={troll}/><h1 className="headerTitle">Meme Generator</h1>
        </header>
    )
}