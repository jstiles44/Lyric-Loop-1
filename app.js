const urlRoot = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`

let hot100url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=100&country=US&f_has_lyrics=1&apikey=6a33c1748a705c73d54b40d8deb5038a`

let snippeturl = `https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=`

// Initialize Score Tracker + Answer Container

let score = 0
let questionTracker = 0
let scoreContainer = document.querySelector('#score')
scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

let answerContainer = document.querySelector('#answer')
answerContainer.innerHTML = 'Correct Answer'
// Get an array of the hot 100 tracks and produce and array of 3 random tracks from it

const getHot100 = async () => {
  try {
    let response = await axios.get(hot100url)
  
    let hot100Tracks = response.data.message.body.track_list
   
    let hot100Random1 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
    
    let hot100Random2 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      if (hot100Random1.track.artist_name === hot100Random2.track.artist_name) {
        let hot100Random2 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      }
    
    let hot100Random3 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      if (hot100Random3.track.artist_name === hot100Random2.track.artist_name || hot100Random3.track.artist_name === hot100Random2.track.artist_name) {
        let hot100Random3 = hot100Tracks[Math.floor((Math.random() * 100) + 1)]
      }
    
    let hot100RandomArray = [hot100Random1, hot100Random2, hot100Random3]
   
    getLyricSnippet(hot100RandomArray)
    
  } catch (error) {
    console.log(error)
  }
}

getHot100()

// retrieve lyric snippet from 1 of the tracks from hot100RandomArray
// display lyric and artist choices on screen
// reveal correct answer and track score when clicked

const getLyricSnippet = async (arr) => {
  
  
  try {
    let snippetTrackID = arr[Math.floor((Math.random() * 2) + 0)].track.track_id

    let lyricResponse = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${snippetTrackID}&apikey=6a33c1748a705c73d54b40d8deb5038a`)

    let lyricSnippet = lyricResponse.data.message.body.snippet.snippet_body
   
    let snippetContainer = document.createElement('p')
    
    gameContainer = document.querySelector('#game-body')
    gameContainer.appendChild(snippetContainer)
    snippetContainer.setAttribute('id', 'snippet')
    snippetContainer.innerHTML = lyricSnippet
    buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('id', 'button-div')
    gameContainer.appendChild(buttonContainer)
     
    let choice1Container = document.createElement('button')
    choice1Container.setAttribute('class', 'choice-one')
    buttonContainer.appendChild(choice1Container)
    choice1Container.innerHTML = arr[0].track.artist_name


    let choice2Container = document.createElement('button')
    choice2Container.setAttribute('class', 'choice-two')
    buttonContainer.appendChild(choice2Container)
    choice2Container.innerHTML = arr[1].track.artist_name
    
    
    let choice3Container = document.createElement('button')
    choice3Container.setAttribute('class', 'choice-three')
    buttonContainer.appendChild(choice3Container)
    choice3Container.innerHTML = arr[2].track.artist_name
    

    choice1Container.addEventListener('click', () => {
      if (snippetTrackID === arr[0].track.track_id) {
        answerContainer.innerHTML = 'Correct!'
         score++
         questionTracker++
       
        setTimeout(removeRound(), 5000)

      } else {
        questionTracker++
        if (snippetTrackID === arr[1].track.track_id) {
          answerContainer.innerHTML = `Correct Answer: ${arr[1].track.artist_name}`
        } else {
          answerContainer.innerHTML = `Correct Answer: ${arr[2].track.artist_name}`
          }
       
        setTimeout(removeRound(), 5000)
       
      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`
      
    })


    choice2Container.addEventListener('click', () => {
      if (snippetTrackID === arr[1].track.track_id) {
        answerContainer.innerHTML = 'Correct!'
        score++
        questionTracker++
      
        setTimeout(removeRound(), 5000)

      } else {
        questionTracker++
        if (snippetTrackID === arr[0].track.track_id) {
          answerContainer.innerHTML = `Correct Answer: ${arr[0].track.artist_name}`
        } else {
          answerContainer.innerHTML = `Correct Answer: ${arr[2].track.artist_name}`
        }
     
        
         setTimeout(removeRound(), 5000)

      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`
      
    })

  
    choice3Container.addEventListener('click', () => {
      if (snippetTrackID === arr[2].track.track_id) {
        answerContainer.innerHTML = 'Correct!'
        score++
        questionTracker++
     
        setTimeout(removeRound(), 5000)

      } else {
        questionTracker++
        if (snippetTrackID === arr[1].track.track_id) {
          answerContainer.innerHTML = `Correct Answer: ${arr[1].track.artist_name}`
        } else {
          answerContainer.innerHTML = `Correct Answer: ${arr[0].track.artist_name}`
        }
     
        setTimeout(removeRound(), 5000)

      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

    })

    

  } catch (error) {
    console.log(error)
  }
  
}

// reset round after click

const removeRound = () => {
  let gameContainer = document.querySelector('#game-body')
  while (gameContainer.lastChild) {
    gameContainer.removeChild(gameContainer.lastChild)
  }

  getHot100()
}


