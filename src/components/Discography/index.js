import React, { useState } from 'react';
import {Albums} from '../Albums';
import {Songs} from '../Songs';
import { SlideShow } from '../SlideShow';


export const Discography = () => {

    const [topAlbums, setAlbums] = useState([
        {rank: 1, album: 'College Dropout'},
        {rank: 2, album: '808 and Heartbreaks'},
        {rank: 3, album: 'Graduation'},
        {rank: 4, album: 'Kids See Ghosts'},
        {rank: 5, album: 'Late Registration'},
        {rank: 6, album: 'My Beautiful Dark twisted Fantasy'},
        {rank: 7, album: 'The Life Of Pablo'},
        {rank: 8, album: 'Watch The Throne'},
        {rank: 9, album: 'Ye'},
        {rank: 10, album: 'Yeezus'}
 ])

 const [topSongs, setTopSongs] = useState([
    {rank: 6, song: 'Runaway'},
    {rank: 1, song: 'Jesus Walks'},
    {rank: 1, song: 'Gold Digger'},
    {rank: 3, song: 'Flashing Lights'},
    {rank: 3, song: 'Power'},
    {rank: 1, song: 'Two Words'},
    {rank: 6, song: 'Devil In a New Dress'},
    {rankt: 1, song: 'Through The Wire'},
    {rank: 3, song: 'Stronger'},
    {rank: 1, song: 'All Falls Down'}
])

  return (
      <div className="Discogs">
      <Albums albums={topAlbums} />
      <Songs songs={topSongs} />
      <SlideShow albums={topAlbums} songs={topSongs}  />
     </div>
  )
}
