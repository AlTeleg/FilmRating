import Star from "./Star"
import { StarsCount } from "../ts/Stars";
import * as React from 'react'

export default function Stars({ count } : StarsCount) {

  const getStars = () => {
    let content : React.ReactElement[] = [];

    for (let i = 0; i < count; i++) {
        content.push(
        <li>
            <Star/>
        </li>
        )
    }
    return content;
  }

  return (
    <>
        { (typeof count === 'number') && (count >= 1 && count <= 5) ? (
            <ul>
                {getStars()}
            </ul>
        ): (undefined) }
    </>
  )
}
