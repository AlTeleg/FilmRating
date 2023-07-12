import Star from "./Star"

export default function Stars({ count }) {

  const getStars = () => {
    let content = [];

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
                {getStars(count)}
            </ul>
        ): (undefined) }
    </>
  )
}
