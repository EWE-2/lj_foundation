import { reviews } from "../constants"
import ContributorsCard from "../components/ContributorsCard"

const LastEvent = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl  max-sm:text-3xl font-bold">
        Our
        <span className="text-coral-red"> Executive </span>
        Directors
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg max-sm:text-sm text-center">Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>
      <div className="mt-24 flex -flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ContributorsCard
          key={review.customerName}
          imgUrl={review.imgUrl}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default LastEvent