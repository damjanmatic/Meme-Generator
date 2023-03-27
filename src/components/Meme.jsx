import React from "react"
export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "" 
    })

    const [allMemes, setAllMemes] = React.useState()

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
    },[])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(e){
        const {name,value} = e.target
        setMeme(prevMeme=> ({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
        <section className="mainSection">
            <div className="wrapper">
                <div>
                <input 
                type="text" 
                name="topText"
                className=""
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="bottomText"
                className=""
                value={meme.bottomText}
                onChange={handleChange}
                />
                </div>
                <button onClick={getMemeImage}>Get a new meme image 🖼<img /></button>
                <div className="container">
                    <img className="memeImg" src={meme.randomImage}/>
                    <p className="topP">{meme.topText}</p>
                    <p className="bottomP">{meme.bottomText}</p>
                </div>
            </div>
        </section>
            <div className="outro">
                <h2>App created with React</h2>
            </div>
        </main>
    )
}