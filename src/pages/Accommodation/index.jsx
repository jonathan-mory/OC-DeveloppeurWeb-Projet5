import { useNavigate, useParams } from 'react-router'
import { useEffect, useMemo } from 'react'
import { useFetch } from '../../utils/hooks'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Ratings from '../../components/Ratings'
import Profile from '../../components/Profile'
import Collapse from '../../components/Collapse'
import './Accommodation.scss'

function Accommodation() {
  const { accommodationId } = useParams()
  const navigate = useNavigate()
  const dataUrl = `${import.meta.env.BASE_URL}accomodations.json`
  const { isLoading, data, error } = useFetch(dataUrl)

  const accommodationSearched = useMemo(() => {
    return data?.find((accommodation) => accommodation.id === accommodationId)
  }, [data, accommodationId])

  useEffect(() => {
    if (!isLoading && !error && !accommodationSearched) {
      navigate('/error')
    }
  }, [isLoading, error, accommodationSearched, navigate])

  return isLoading ? (
    <p>Chargement en cours</p>
  ) : error ? (
    <p>Erreur lors du chargement des données.</p>
  ) : accommodationSearched ? (
    <main>
      <Slideshow galleryImages={accommodationSearched.pictures} />
      <div className="container">
        <div className="presentation">
          <h1 className="presentation__title">{accommodationSearched.title}</h1>
          <span className="presentation__location">
            {accommodationSearched.location}
          </span>
          <div className="presentation__tags">
            {accommodationSearched.tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} tagName={tag} className="tag" />
            ))}
          </div>
        </div>
        <div className="profile-ratings-container">
          <Profile
            hostName={accommodationSearched.host.name}
            hostPicture={accommodationSearched.host.picture}
          />
          <Ratings currentRating={parseInt(accommodationSearched.rating)} />
        </div>
        <div className="collapse-container">
          <Collapse title="Description">
            <p>{accommodationSearched.description}</p>
          </Collapse>
          <Collapse title="Equipements">
            <ul>
              {accommodationSearched.equipments.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  ) : null
}

export default Accommodation
