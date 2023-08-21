

function ProfileImage (props) {
    console.log ("profile img", props)

    return ( 
<img src={props.image} className="profile" alt="profile" />  
)
}

export default ProfileImage