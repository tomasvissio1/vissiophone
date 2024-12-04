

function ProfileCard({nombre,tag,url}){

    return(

        

        <div>
            <img src={url}/>
            <h1>{nombre}</h1>
            <p>{tag}</p>
        </div>
    )
}

export default ProfileCard