const Api = () => {
  // const BASE_URL = 'https://rave.onrender.com'
  const BASE_URL = 'https://partybank-organizer-269c8057a65f.herokuapp.com'
  // const BASE_URL_PAYMENT = 'https://partybank-payment-sandbox-6945ea2e70ec.herokuapp.com'
  const BASE_URL_PAYMENT = 'https://partybank-payment-d49d9e60ae5b.herokuapp.com'

  const SUBSCRIBE = `${BASE_URL_PAYMENT}/api/v1/subscribe`
  const PAY = `${BASE_URL_PAYMENT}/api/v1/payment`
  const SEARCH_TICKET = `${BASE_URL_PAYMENT}/api/v1/search`
  const VALIDATE_TICKET = `${BASE_URL_PAYMENT}/api/v1/validate`
  const GET_PURCHASED_TICKETS = `${BASE_URL_PAYMENT}/api/v1/tickets`
  const RESERVE_TICKET = `${BASE_URL_PAYMENT}/api/v1/reserve`
  const GET_VALIDATIONS = `${BASE_URL_PAYMENT}/api/v1/tickets/validations`
  
  const AUTH = `${BASE_URL}/auth/login/attendee`
  const GOOGLE_AUTH = `${BASE_URL}/auth/google/login`
  const DISCOVER_EVENTS = `${BASE_URL}/api/v1/event/discover`
  const UPDATE_USER_INFO = `${BASE_URL}/api/v1/attendee/update`
  const GET_EVENT_BY_REFERENCE = `${BASE_URL}/api/v1/event/reference`

  return {
    SUBSCRIBE,
    PAY, SEARCH_TICKET, VALIDATE_TICKET,
    GET_PURCHASED_TICKETS,
    DISCOVER_EVENTS,
    GET_EVENT_BY_REFERENCE,
    AUTH, GOOGLE_AUTH,
    RESERVE_TICKET,
    UPDATE_USER_INFO,
    GET_VALIDATIONS
  }
}

export default Api
