import Corso from "../components/Corso"
import RecommendedWorks from "../components/RecommendedWorks"

const Home = () => {
  return (
    <div className="space-y-8 lg:space-y-12">
      {/* title */}
      <h1 className="text-5xl font-semibold tracking-[-0.48px]">
        Ciao, Luca!
      </h1>
      <Corso />
      <RecommendedWorks />
    </div>
  )
}

export default Home