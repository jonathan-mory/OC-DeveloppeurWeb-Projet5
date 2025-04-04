import Banner from '../../components/Banner'
import Card from '../../components/Card'
import HomeBanner from '../../assets/images/home_banner.jpg'
import { useFetch } from '../../utils/hooks'
import './Home.scss'

function Home() {
  // const dataUrl = '/accomodations.json'
  const dataUrl = `${import.meta.env.BASE_URL}accomodations.json`
  const { isLoading, data, error } = useFetch(dataUrl)
  console.log(data)

  if (isLoading) return <span>Chargement en cours</span>
  if (error) return <span>Erreur lors du chargement des données</span>

  return (
    <main>
      <Banner imageUrl={HomeBanner}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
      <section className="card-container">
        {data.map((element) => (
          <Card
            key={element.id}
            title={element.title}
            coverUrl={element.cover}
            id={element.id}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
