import '../styles/styles.css'

const liveMatches = document.getElementById('live');
const upcomingMatches = document.getElementById('upcoming');
const recentMatches = document.getElementById('recent');

const livematch = document.getElementById('live-information')
const upcomingmatch = document.getElementById('upcoming-information')
const recentmatch = document.getElementById('recent-information')

liveMatches.onclick = () => {
    livematch.classList.remove('show')
    upcomingmatch.classList.add('show');
    recentmatch.classList.add('show');
}
upcomingMatches.onclick = () => {
    livematch.classList.add('show')
    upcomingmatch.classList.remove('show');
    recentmatch.classList.add('show');
}
recentMatches.onclick = () => {
    livematch.classList.add('show')
    upcomingmatch.classList.add('show');
    recentmatch.classList.remove('show');
}