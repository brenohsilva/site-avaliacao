import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'
import { PropsWithChildren } from 'react';

interface StarRateFixedProps {
    propValor: number;
  }


const StarRateFixed = (props: PropsWithChildren<StarRateFixedProps>) => {

    const [rating, setRating] = useState(0);
    
    const value = parseInt(String(props.propValor))
   
    useEffect(() => {
        setRating(value)
    }, [])

    return (
        <div className="w-48 p-5 mx-auto grid grid-cols-5 gap-10 justify-items-center ">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
            
                return (
                    <label key={ratingValue}>
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