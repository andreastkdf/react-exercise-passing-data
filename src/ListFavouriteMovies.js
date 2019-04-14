import React, { Component } from 'react'

class ListFavouriteMovies extends Component {
  render() {
    return (
      <ul className='user-list'>
        {this.props.profiles.map((profile) => ( 
          <li key={profile.id} className='user-list-item'>
            <p>{`${this.props.users[profile.id].name}\'s favourite movie is "${this.props.movies[profile.favoriteMovieID].name}."`}</p>
          </li>
       ))}
       </ul>
    )
  }
}

export default ListFavouriteMovies