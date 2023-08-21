import ProfileImage from "./ProfileImage.jsx"
import User from "./User.jsx";
import Timestamp from "./Timestamp.jsx";
import Message from "./Message.jsx";
import Actions from "./Actions.jsx";

function Tweet(props) {

  const {user, timestamp, message} = props.tweet
  console.log ("timestamp", timestamp)
  return (
    <div className="tweet">
    <ProfileImage image={user.image} className="profile" alt="profile"/>   
    {/* ?? IT WORKS BUT I´M NOT REALLY USING THE COMPONENT HERE, I DON´T SEE HOW TO MAKE IT WORK. I THINK IT HAS TO DO WITH USING THE PROPERTIES CORRECTLY WHICH PROBABLY I´M NOT DOING HERE */}
{/*   
   <img src={props.tweet.user.image} className="profile" alt="profile" /> */}


      <div className="body">
        <div className="top">
          {/* <span className="user">
            <span className="name">{props.tweet.user.name} </span>
            <span className="handle">@{props.tweet.user.handle}</span>
          </span> */}
     {/* <span className="timestamp">{props.tweet.timestamp}</span> */}

  <User name={user.name} handle={user.handle} />
  <Timestamp time={timestamp} />
     
       
         {/* <p className="message">
        {props.tweet.message}
        </p> */} 
        
        </div>  
  <Message message={message} />
  

  <Actions />
{/* 
        <div className="actions">
      
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div> */}


      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
