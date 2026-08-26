export function Joke(prop){
    return(
        <>
            <p className="setup">Setup: {prop.setup}</p>
            <p className="punchline">Punchline: {prop.punchline}</p>
            <hr />
        </>
    )
}
