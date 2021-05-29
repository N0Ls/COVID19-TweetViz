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
          {/*<img className="tweet_media" alt="tweet media" src={d.media} /> */}
        </div>
        <div className="tweet_footer">
          <div className="tweet_date">
            {d.formatedDate.getHours() < 10 ? "0"+d.formatedDate.getHours():d.formatedDate.getHours()}
            :
            {d.formatedDate.getMinutes()< 10 ? "0" +d.formatedDate.getMinutes():d.formatedDate.getMinutes()}
            {" "} · {" "}
            {d.formatedDate.getDate()}/{d.formatedDate.getMonth() + 1 < 10 ? "0"+(d.formatedDate.getMonth() + 1):d.formatedDate.getMonth() + 1}/
            {d.formatedDate.getYear()}
          </div>
          <div className="tweet_influence">
            <div><span>{d.retweet_count}</span> <span className="fas fa-retweet"></span> </div>   
            <div><span>{d.favorite_count}</span> <span className="fas fa-heart"></span></div>
          </div>
        </div>
      </div>
    )}
  </>)
}
;
