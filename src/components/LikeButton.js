
import { useState } from 'react';

export default function LikeButton() {
   
     const [likes, setLikes] = useState(100);
     const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        clicked ? setLikes(prevCount => prevCount - 1) : setLikes(prevCount => prevCount +1);
        setClicked(!clicked)
    }
    
    let changeLiked = clicked ? 'like-button liked' :'like-button';
    
        
        return (
            <>
                <div onClick={handleClick}  className={changeLiked} >
                    <h2 >Like Button | <span className="likes-counter">{likes}</span></h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                        border: 1px solid black;
                        width: fit-content;
                        cursor: pointer
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                   .likes-counter {
                       font-size: 1.5rem
                   }
                `}</style>
            </>
        );
    
    
}
