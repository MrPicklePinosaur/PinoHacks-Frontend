
import axios from 'axios'
import { APIURL } from '@/config'

/* query for all properties of user object */
export const getAllEvents = () => {
  const query = `
    {
      events {
        id
        name
        event_type
        permission
        start_time
        end_time
        description
        speakers {
          name
          profile_pic
        }
        public_url
        private_url
        related_events
      }
    }
  `
  return axios.get(APIURL + query)
    .then(response => {
      return response.data
    })
}
