import { useParams } from 'react-router-dom'
import PlaceList from "../components/PlaceList"

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Mykonos',
    description: 'Famous for its nightlife, this tiny island is home to 16th-century windmills, beaches & dance clubs',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMax9cqvUGLrBbeBfznnT64SGESehi2OaW4Z2wY=w518-h240-k-no',
    address: 'Mikonos 846 00, Greece',
    location: {
      lat: 37.550221,
      lng: 25.361004,
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Santorini',
    description: 'Aegean island group with rugged terrain, classic blue & white architecture & tourism amenities.',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOhXqrfZNIMVLxr5ujbJ3mO7tty0b4YPW_8xkHM=w426-h240-k-no',
    address: 'Santorini, Greece',
    location: {
      lat: 36.506195,
      lng: 25.382563,
    },
    creator: 'u2'
  },
]

const UserPlaces = () => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}


export default UserPlaces