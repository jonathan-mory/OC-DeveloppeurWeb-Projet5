import { useParams } from 'react-router'
import { useFetch } from '../../utils/hooks'
import Error from '../Error'
import Slideshow from '../../components/Slideshow'
import Tag from '../../components/Tag'
import Ratings from '../../components/Ratings'
import Profile from '../../components/Profile'
import Collapse from '../../components/Collapse'
import './Accommodation.scss'

function Accommodation() {
  const { accommodationId } = useParams()

  const dataUrl = '/accomodations.json'
  const { isLoading, data, error } = useFetch(dataUrl)

  if (isLoading) return <span>Chargement en cours</span>
  if (error) return <span>Erreur lors du chargement des données</span>

  const accommodationSearched = data.find(
    (element) => element.id === accommodationId
  )

  if (!accommodationSearched) {
    return <Error />
  } else {
    return (
      <main>
        <Slideshow galleryImages={accommodationSearched.pictures} />
        <div className="container">
          <div className="presentation">
            <h1 className="presentation__title">
              {accommodationSearched.title}
            </h1>
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
      </main>
    )
  }
}

export default Accommodation
