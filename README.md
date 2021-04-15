# Project Overview

## Project Name

Lyric Loop
https://jstiles44.github.io/Lyric-Loop-1/

## Project Description

This app is a game that displays a lyric snippet of a song.  Under the lyric snippet, the name of 3 artists is displayed.  The goal of the game is for the user to pick the artist who sang the lyric.  The goal is to get a certain amount of rounds correct within a specified amount of rounds.  

## API and Data Sample

[Musixmatch Developer](https://developer.musixmatch.com/)

```JSON
{"message":{"header":{"status_code":200,"execute_time":0.010684013366699},"body":{"snippet":{"snippet_id":24514670,"snippet_language":"en","restricted":0,"instrumental":0,"snippet_body":"But you didn't have to cut me off","script_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_js\/e_0\/sn_1\/l_24514670\/su_0\/rs_0\/tr_3vUCAJYLeAU4dvxtGRkG6lmnU787VdTHu1oPKHC8ulkn6oymwRJBNZa9yqZ9Au4C4LUeDtkStllaZbts4bGH0Oz46vkbkFmaMJBZImPwxt7gwMPJBUihfxxQA2BobKeD_FiqB1lB8LTKX8iVmVXegkJclqdpjEWl7CgdbGMiGlQ1SnHMMOKgcHs9NiJvy0GOmNVlMQLbYLcBv35JIO9qLkingE6yacAUqKcWu4u3-qyooCIonQNTVZkN1ALMnEs_CwBo7495VhD7QNGY8UgLZTUFV4ox8sIWo4eR5ADnMzOxAvDf2Tj_h5Ny4e4vcxIOvg4MjhRZnkR5w5oytUQms5RVPRspdfmvjR-OmprFS3UT3N8q4FDiWMOaxvfHFGFYmuk48f-yKwVlG1Uji2K7fyJt_H-XQGyjyctTe7NN9mtgZp9OlNv6-09tJnVrFrpB\/","pixel_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_img\/e_0\/sn_1\/l_24514670\/su_0\/rs_0\/tr_3vUCAB1KP5R4jxTSdSpU8kqHyeskwdaDPxppg0YXPaQ7OWkCS82fe9K32fNDIQLM7TPNd_pjg8jTrccC7ZnEPiRRkce6-xZG4Ja_ipJz0ZOPCtNSruxRC3CvgdFoGPG2G7ylSvkUGDSVUwaxA5OQNzB5HwQi0KZhC8nCjwpjXw1QLX_9Op2ZfO9BPSC9ryletVjkB99jPTt_kGCgbFypvFGfmzxnD4t1ylE1JIkMxtiZo4g6s0TRTRjUNpMMwbwRIHDR2_yzA2JDtFltM6eUwlKZVlhvvHnO5b_f3ZvRgWBDO_-HVwNcshx9To4tumjT2hroBFFDinm4YqYWfepT4Z1Ai1KspQj4K0-TrIe57QpAs4EeKq8gPr9JnhHE1dqTYSxpSLEQga982S5uKFF9k4tZn3f3W4LACZwG3tWqmdcruYfwniuEFJqbJLYBnOGH\/","html_tracking_url":"https:\/\/tracking.musixmatch.com\/t1.0\/m_html\/e_0\/sn_1\/l_24514670\/su_0\/rs_0\/tr_3vUCADEiYwvRNFjaRQEd6MWEfbeRJyWNN9b9AchK1RdaM7Z9YuzF-O-gsGQGsW988hnsxxlGCq2phkcLRtyBQyH7Bb5MjCVXwlGQjUTO2rIvqD3egDfTDytz9SxzzYexfu8CCU8ucxDZ_LCZXj9wjuB_WnYMbTN7G8ei8g1ySsraaSvGjRvzgIqWseE4XS6HnAFjrZL9oK3mdlwG6t4uoiQ7soCh3JbyWUa8MP2XxHySssHc5CJzhhMMcyUiMPuuVPLcsuF0QYqOfC8woOElVFXmK_qWX4CWPra34aWpZ-_yNiKQdatSsx_oi3MvC5-w8g9rr7ctwUbMGL9WdoZUOShHns2KP9L60k5BNpXJz-DA5MMfzbJ33fAPUAYKRg0M4JZCLVexX4RBj5imQM3uiRtgCOjtIy20VeH4OTY1qQM1_wHOCTw6RKesnzkJv8D2\/","updated_time":"2021-01-15T13:42:39Z"}}}}
```
## Wireframes

[Mobile Device Wireframe](https://imgur.com/mvkAJtp)

[Desktop Device Wireframe](https://imgur.com/a/o51Rrfj)

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- A random lyric snippet is displayed
- 3 artists are displayed, 1 corresponding with lyric snippet
- When the user chooses, the correct answer is revealed
- The score will be tracked

#### PostMVP  

- Create "song mode" where 3 songs titles are used as choices instead of artist name
- Create multi-player mode



## Priority Matrix

[Priority Matrix](https://imgur.com/a/gQ1qPUN)



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
  <div id = 'word-container'>
    <div id = 'who-container'>
        <span class = 'letters' id = 'letter1'>W</span>
        <span class = 'letters' id = 'letter2'>H</span>
        <span class = 'letters' id = 'letter3'>O</span>
        <span class = 'letters' id = 'letter4'></span>
  </div>
  <div id = 'sang-container'>
        <span class = 'letters' id = 'letter5'>S</span>
        <span class = 'letters' id = 'letter6'>A</span>
        <span class = 'letters' id = 'letter7'>N</span>
        <span class = 'letters' id = 'letter8'>G</span>
        <span class = 'letters' id = 'letter9'></span>
  </div>
  <div id = 'it-container'>
        <span class = 'letters' id = 'letter10'>I</span>
        <span class = 'letters' id = 'letter11'>T</span>
        <span class = 'letters' id = 'letter12'>?</span>
  </div>
  ```

