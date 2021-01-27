const urlRoot = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/`

let hot100url = `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=100&country=US&f_has_lyrics=1&apikey=6a33c1748a705c73d54b40d8deb5038a`

let snippeturl = `https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=`

let score = 0
let questionTracker = 0
let scoreContainer = document.querySelector('#score')
scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

// Get an array of the hot 100 tracks and produce and array of 3 random tracks from it

const getHot100 = async () => {
  try {
    let response = await axios.get(hot100url)
  //  console.log(response.data.message.body.track_list)
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

    
    // let choice1Container = document.createElement('button')
    // choice1Container.setAttribute('class', 'choice-one')
    // gameContainer.appendChild(choice1Container)
    // choice1Container.innerHTML = hot100Random1.track.artist_name
    // console.log(choice1Container)
    
    // let choice2Container = document.createElement('button')
    // choice2Container.setAttribute('class', 'choice-two')
    // gameContainer.appendChild(choice2Container)
    // choice2Container.innerHTML = hot100Random2.track.artist_name

    // let choice3Container = document.createElement('button')
    // choice3Container.setAttribute('class', 'choice-three')
    // gameContainer.appendChild(choice3Container)
    // choice3Container.innerHTML = hot100Random3.track.artist_name
    
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
    let snippetContainer = document.createElement('p')
    // console.log(snippetContainer)
    gameContainer = document.querySelector('#game-body')
    gameContainer.appendChild(snippetContainer)
    snippetContainer.setAttribute('id', 'snippet')
    snippetContainer.innerHTML = lyricSnippet

     

    // let choice1Container = document.querySelector('#choice-one')
  
    let choice1Container = document.createElement('button')
    choice1Container.setAttribute('class', 'choice-one')
    gameContainer.appendChild(choice1Container)
    choice1Container.innerHTML = arr[0].track.artist_name
    choice1Container.addEventListener('click', () => {
      if (snippetTrackID === arr[0].track.track_id) {
        console.log('You Are Correct')
        // score++
        // questionTracker++
        // choice1Container.disabled = true;
        // choice2Container.disabled = true;
        // choice3Container.disabled = true;
        removeRound()

      } else {
        console.log('Incorrect')
        // questionTracker++
        // choice1Container.disabled = true;
        // choice2Container.disabled = true;
        // choice3Container.disabled = true;
        removeRound()
       
      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`
      
    })



    // let choice2Container = document.querySelector('#choice-two')
    let choice2Container = document.createElement('button')
    choice2Container.setAttribute('class', 'choice-two')
    gameContainer.appendChild(choice2Container)
    choice2Container.innerHTML = arr[1].track.artist_name
    choice2Container.addEventListener('click', () => {
      if (snippetTrackID === arr[1].track.track_id) {
        console.log('You Are Correct')
        // score++
        // questionTracker++
      
        removeRound()

      } else {
        console.log('Incorrect')
        // questionTracker++
        
        removeRound()

      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`
      
    })

    // let choice3Container = document.querySelector('#choice-three')
    let choice3Container = document.createElement('button')
    choice3Container.setAttribute('class', 'choice-three')
    gameContainer.appendChild(choice3Container)
    choice3Container.innerHTML = arr[2].track.artist_name
    choice3Container.addEventListener('click', () => {
      if (snippetTrackID === arr[2].track.track_id) {
        console.log('You Are Correct')
        // score++
        // questionTracker++
     
        removeRound()

      } else {
        console.log('Incorrect')
        // questionTracker++
    
        removeRound()

      }
      let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

    })

    let scoreContainer = document.querySelector('#score')
      scoreContainer.innerHTML = `Score: ${score}/${questionTracker}`

  } catch (error) {
    console.log(error)
  }
  
}









// let gameDiv = document.querySelector('#game-body')

// gameDiv.addEventListener('click', (e) => {
//   e.preventDefault()
  
  

//   removeRound()
// })


const removeRound = () => {
  let gameContainer = document.querySelector('#game-body')
  while (gameContainer.lastChild) {
    gameContainer.removeChild(gameContainer.lastChild)
  }
  // let button1 = document.createElement('button')
  // gameContainer.appendChild(button1)
  // button1.setAttribute('id', 'choice-1')
  
  // let button2 = document.createElement('button')
  // gameContainer.appendChild(button1)
  // button2.setAttribute('id', 'choice-2')
  
  // let button3 = document.createElement('button')
  // gameContainer.appendChild(button1)
  // button3.setAttribute('id', 'choice-3')
  
  getHot100()
}


