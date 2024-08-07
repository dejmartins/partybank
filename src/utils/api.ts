const Api = () => {
  const BASE_URL = 'https://partybank-29cd4a45490f.herokuapp.com'
  const GET_ALL_EVENTS = `${BASE_URL}/api/v1/events`
  const SUBSCRIBE = `${BASE_URL}/api/v1/subscribe`
  const GET_EVENT = `${BASE_URL}/api/v1/events`
  const PAY = `${BASE_URL}/api/v1/payment`
  const SEARCH_TICKET = `${BASE_URL}/api/v1/search`
  const VALIDATE_TICKET = `${BASE_URL}/api/v1/validate`
  const GET_PURCHASED_TICKETS = `${BASE_URL}/api/v1/tickets`

  return {
    GET_ALL_EVENTS,
    SUBSCRIBE,
    GET_EVENT,
    PAY, SEARCH_TICKET, VALIDATE_TICKET,
    GET_PURCHASED_TICKETS
  }
}

export default Api
