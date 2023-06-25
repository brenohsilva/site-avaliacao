import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faStar)

const Rate = ({count, rating, color, onRating}) => {

    const [hoverRating, sethoverRating] = useState(0);

    const getColor = (index) => {
        if (hoverRating >= index){
            return color.filled;
        } else if (!hoverRating && rating >= index) {
            return color.filled
        }

        return color.unfilled;
    }
    
    const startRating = useMemo(() => {
        return Array(count)
                .fill(0)
                .map((_, i) => i + 1)
                .map( idx => (
                    <FontAwesomeIcon
                    key={idx}
                        className='cursor-pointer'
                        icon={['fas', 'star']}
                        onClick={() => onRating(idx)}
                        style={{color: getColor(idx)}}
                        onMouseEnter={() => sethoverRating(idx)}
                        onMouseLeave={() => sethoverRating(0)}
                    />                 
                    
                ));
    }, [count, rating, hoverRating])
    
    return (
        <div>
            {startRating}
        </div>
    )
}

Rate.propTypes = {
    count: PropTypes.number,
    rating: PropTypes.number,
    onChange: PropTypes.func,
    color: { 
        filled: PropTypes.string,
        unfilled: PropTypes.string
}
}

Rate.defaultProps = {
    count: 5,
    rating: 0,
    color: {
        filled: '#f5eb3b',
        unfilled: '#dcdcdc'
    }
}

export default Rate