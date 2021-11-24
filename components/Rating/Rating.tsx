import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({isEditable=false, rating, setRating, className, ...props }:RatingProps):JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(()=> {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (isEditable) constructRating(i);
  };

  const onClick = (i: number) => {
    if (isEditable && setRating) setRating(i);
  }

  const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
    if (event.code === 'Space' && setRating) setRating(i)
  }

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number)=> {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
        
      )
    })
    setRatingArray(updatedArray);
  }

  return (
    <div {...props}>
      {ratingArray.map((r, i) => {
        return <span key={i}>{r}</span>
      })}
    </div>
  )
}