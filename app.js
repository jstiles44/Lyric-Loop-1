const urlRoot = `https://api.musixmatch.com/ws/1.1/`

let hot100url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=100&country=US&f_has_lyrics=1&apikey=6a33c1748a705c73d54b40d8deb5038a`

let snippeturl = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=`

let score = 0
let questionTracker = 0
let scoreContainer = document.querySelector('#score')
scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

// Get an array of the hot 100 tracks and produce and array of 3 random tracks from it

const getHot100 = async () => {
  try {
    let response = await axios.get(hot100url)
    // console.log(response.data.message.body.track_list)
    let hot100Tracks = response.data.message.body.track_list
    // console.log(hot100Tracks)
    let hot100Random1 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
    // console.log(hot100Random1)
    let hot100Random2 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      if (hot100Random1.track.artist_name === hot100Random2.track.artist_name) {
        let hot100Random2 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      }
    //  console.log(hot100Random2)
    let hot100Random3 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
    if (hot100Random3.track.artist_name === hot100Random2.track.artist_name || hot100Random3.track.artist_name === hot100Random2.track.artist_name) {
        let hot100Random3 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      }
    //  console.log(hot100Random3)
    let hot100RandomArray = [hot100Random1, hot100Random2, hot100Random3]
    // console.log(hot100RandomArray)
    // console.log(hot100RandomArray[Math.floor((Math.random() * 2) + 0)].track.track_id)

    getLyricSnippet(hot100RandomArray)
    

    

    } catch (error) {
    console.log(error)
  }
}

getHot100()

// retrieve lyric snippet from 1 of the tracks from hot100RandomArray

const getLyricSnippet = async (arr) => {
  
  
  try {
    let snippetTrackID = arr[Math.floor((Math.random() * 2) + 0)].track.track_id
    // console.log(snippetTrackID)

    let lyricResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${snippetTrackID}&apikey=6a33c1748a705c73d54b40d8deb5038a`)
    // console.log(lyricResponse)

    let lyricSnippet = lyricResponse.data.message.body.snippet.snippet_body
    // console.log(lyricSnippet)
    let snippetContainer = document.querySelector('#snippet')
    // console.log(snippetContainer)
    snippetContainer.innerHTML = lyricSnippet

    let choice1Container = document.querySelector('#choice-one')
    choice1Container.innerHTML = arr[0].track.artist_name
    choice1Container.addEventListener('click', () => {
      if (snippetTrackID === arr[0].track.track_id) {
        console.log('You Are Correct')
        score++
        questionTracker++
        choice1Container.disabled = true;
        choice2Container.disabled = true;
        choice3Container.disabled = true;
        

      } else {
        console.log('Incorrect')
        questionTracker++
        choice1Container.disabled = true;
        choice2Container.disabled = true;
        choice3Container.disabled = true;
        
       
      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`
      
    })



    let choice2Container = document.querySelector('#choice-two')
    choice2Container.innerHTML = arr[1].track.artist_name
    choice2Container.addEventListener('click', () => {
      if (snippetTrackID === arr[1].track.track_id) {
        console.log('You Are Correct')
        score++
        questionTracker++
        choice1Container.disabled = true;
        choice2Container.disabled = true;
        choice3Container.disabled = true;
        

      } else {
        console.log('Incorrect')
        questionTracker++
        choice1Container.disabled = true;
        choice2Container.disabled = true;
        choice3Container.disabled = true;
        

      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`
      
    })

    let choice3Container = document.querySelector('#choice-three')
    choice3Container.innerHTML = arr[2].track.artist_name
    choice3Container.addEventListener('click', () => {
      if (snippetTrackID === arr[2].track.track_id) {
        console.log('You Are Correct')
        score++
        questionTracker++
        choice1Container.disabled = true;
        choice2Container.disabled = true;
        choice3Container.disabled = true;
        

      } else {
        console.log('Incorrect')
        questionTracker++
        choice1Container.disabled = true;
        choice2Container.disabled = true;
        choice3Container.disabled = true;
        

      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

    })

  } catch (error) {
    console.log(error)
  }
  
}

