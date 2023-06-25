import React, { useState} from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating(rating, setRating) {
    const [hover, setHover] = useState(null);

    return (
        <div className="w-48 p-5 mx-auto grid grid-cols-5 gap-10 justify-items-center ">
            {
                [...Array(5)].map((star, i)=> {
                    const ratingValue = i + 1;
                    return(
                        <label>
                            <input className='hidden' 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)} 
                            />
                            <FaStar
                            size={30}
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)} 

                            />
                        </label>

                    )
                })
            }
        </div>
    )

}