import image from '../../badge.png'
export const Tweet = ({ d }) => {

return(<>
    {d && (
      <div className="tweet">
        <div className="user_infos">
          <div className="user_name">
            <h2 className="user_display_name">
              {d.user_name}{d.user_verified?<img className='badge' src={image} alt='verified badge'/>:<></>}
            </h2>
            <h3 className="user_handle">@{d.user_screen_name}</h3>
          </div>
        </div>
        <div className="tweet_content">
          <p className="tweet_text">{d.text}</p>
        </div>
        <div className="tweet_footer">
          <div className="tweet_date">
            {d.formatedDate.getHours() < 10 ? "0"+d.formatedDate.getHours():d.formatedDate.getHours()}
            :
            {d.formatedDate.getMinutes()< 10 ? "0" + d.formatedDate.getMinutes():d.formatedDate.getMinutes()}
            {" "} · {" "}
            {d.formatedDate.getDate() < 10? "0" + d.formatedDate.getDate():d.formatedDate.getDate()}
            /{(d.formatedDate.getMonth() + 1) < 10 ? "0"+(d.formatedDate.getMonth() + 1):(d.formatedDate.getMonth() + 1)}
            /{d.formatedDate.getFullYear()}
          </div>
          <div className="tweet_influence">
            <div><span>{parseInt(d.retweet_count).toLocaleString()}</span> <span className="fas fa-retweet"></span> </div>   
            <div><span>{parseInt(d.favorite_count).toLocaleString()}</span> <span className="fas fa-heart"></span></div>
            <div><span>{parseInt(d.user_followers_count).toLocaleString()}</span> <span className="fas fa-users"></span></div>
          </div>
        </div>
      </div>
    )}
  </>)
}
;
