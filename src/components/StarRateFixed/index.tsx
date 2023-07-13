import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'

const StarRateFixed = (props) => {

    const [rating, setRating] = useState(null);
    var value = props.propValor
    value = parseInt(value)
    
   
    useEffect(() => {
        setRating(value)
    }, [])

    return (
        <div className="w-48 p-5 mx-auto grid grid-cols-5 gap-10 justify-items-center ">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
            
                return (
                    <label>
                        <FaStar
                        size={30}
                        color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                        />
                    </label>
                    )
            })}
        </div>
    );
};


export default StarRateFixed