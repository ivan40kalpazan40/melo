export const goToRandomPage = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const urlConfig = (url) => {
  let weblink = url.includes('facebook') ? (
    <>
      <i className='facebook f icon'></i>Facebook
    </>
  ) : url.includes('instagram') ? (
    <>
      <i className='instagram icon'></i> Instagram
    </>
  ) : url.includes('soundcloud') ? (
    <>
      <i class='soundcloud icon '></i> Soundcloud
    </>
  ) : url.includes('tumblr') ? (
    <>
      <i class='tumblr icon '></i> Tumblr
    </>
  ) : url.includes('twitter') ? (
    <>
      <i class='twitter icon'></i>Twitter
    </>
  ) : url.includes('vevo') ? (
    'Vevo'
  ) : url.includes('wikipedia') ? (
    <>
      <i class='wikipedia w icon'></i> Wikipedia
    </>
  ) : url.includes('youtube') ? (
    <>
      <i className='youtube icon'></i>Youtube
    </>
  ) : url.includes('bandcamp') ? (
    <>
      <i class='bandcamp icon'></i>Bandcamp
    </>
  ) : url.includes('spotify') ? (
    <>
      <i className='spotify icon'></i>Spotify
    </>
  ) : url.includes('deezer') ? (
    'Deezer'
  ) : url.includes('myspace') ? (
    'Myspace'
  ) : url.includes('reverbnation') ? (
    'Reverbnation'
  ) : url.includes('mixcloud') ? (
    <>
      <i className='mixcloud icon'></i>Mixcloud
    </>
  ) : url.includes('audioculture') ? (
    'audioculture'
  ) : url.includes('last.fm') ? (
    <>
      <i className='lastfm icon'></i>Last.fm
    </>
  ) : url.includes('discogs') ? (
    'Discogs'
  ) : url.includes('flickr') ? (
    <>
      <i className='flickr icon'></i>Flickr
    </>
  ) : url.includes('whosampled') ? (
    'WhoSampled'
  ) : url.includes('lafonoteca') ? (
    'lafonoteca'
  ) : url.includes('wobblyweb') ? (
    'wobbly web'
  ) : url.includes('linkedin') ? (
    <>
      <i className='linkedin icon'></i>LinkedIn
    </>
  ) : url.includes('imdb') ? (
    <>
      <i class='imdb icon'></i>IMDB
    </>
  ) : url.includes('cmt.com') ? (
    'cmt.com'
  ) : url.includes('answers.com') ? (
    'answers.com'
  ) : url.includes('discomusic.com') ? (
    'discomusic.com'
  ) : url.includes('musicteachers') ? (
    'music teachers'
  ) : url.includes('whatgear.com') ? (
    'whatgear.com'
  ) : url.includes('equipboard.com') ? (
    'equipboard.com'
  ) : url.includes('vimeo') ? (
    <>
      <i className='vimeo icon'></i> Vimeo
    </>
  ) : url.includes('ascap.com') ? (
    'ascap.com'
  ) : url.includes('bandtraq.com') ? (
    'bandtraq.com'
  ) : url.includes('genius.com') ? (
    'genius.com'
  ) : (
    'Official website'
  );
  return weblink;
};
