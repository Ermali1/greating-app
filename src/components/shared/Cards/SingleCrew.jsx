import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Loading from "../../LoadingState"

export default function SingleCrew() {
  const [singleCrew, setSingleCrew] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchSingleCrew = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/crew/${id}`)
      const data = await res.json()
      setSingleCrew(data)
    }

    fetchSingleCrew()
  }, [id])

  return (
    <>
      {!singleCrew ? (
        <Loading />
      ) : (
        <section className="py-32">
          <div className="grid grid-cols-1 gap-8 px-5 max-width md:grid-cols-2 md:gap-10">
            <article>
              <img src={singleCrew.image} alt={singleCrew.name} />
            </article>

            <article>
              <h1 className="mb-10 heading">{singleCrew.name}</h1>
              <h2 className="mb-5 text-lg font-bold text-white">Details</h2>
              <ul className="text-sm text-white opacity-75">
                <li className="mb-2">Currently at {singleCrew.agency}</li>
                {singleCrew.status === "active" ? (
                  <li className="capitalize text-emerald-500">
                    Status: {singleCrew.status}
                  </li>
                ) : (
                  <li className="capitalize text-rose-500">
                    Status: {singleCrew.status}
                  </li>
                )}
              </ul>

              <ul className="flex items-center justify-start gap-5 mt-10">
                <li>
                  <a
                    href={singleCrew.wikipedia}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Wikipedia
                  </a>
                </li>
                <li className="text-sm text-white opacity-75 hover:opacity-100">
                  <Link to="/crew">&larr; Back</Link>
                </li>
              </ul>
            </article>
          </div>
        </section>
      )}
    </>
  )
}