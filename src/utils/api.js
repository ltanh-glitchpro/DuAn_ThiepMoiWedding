
/*
 Placeholder API utils.
 Replace with Firebase calls after you set up Firebase and update src/firebase.js
*/
export async function sendRSVP(data){
  // Simple mock: store to localStorage (for template demo)
  const existing = JSON.parse(localStorage.getItem('rsvps') || '[]')
  existing.push({...data, createdAt: new Date().toISOString()})
  localStorage.setItem('rsvps', JSON.stringify(existing))
  // return an id
  return 'local-' + (existing.length)
}
