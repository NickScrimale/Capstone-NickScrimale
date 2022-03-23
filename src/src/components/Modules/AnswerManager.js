const remoteURL = "http://localhost:8088"

export const getAnswerById = (answerId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/answers/${answerId}?_expand=userId`)
  .then(res => res.json())
}

export const getAllAnswers = () => {
  return fetch(`${remoteURL}/answers`)
  .then(res => res.json())
}

