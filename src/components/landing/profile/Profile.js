import React from 'react'
import './profile.scss'
import { profiles } from '../data/profiles'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const Profile = () => {

  return (
    <div className='landing-container'>
      <img className='logo' src="assets/profile/netflix.svg" alt="" />

      <div className='content'>
        <span className='title'>Who's watching?</span>
        <div className='profiles'>
          {profiles.map((profile, index) =>
          <Link className='sam' to="/browse">
            <div className='profile'>
              <img className='image' src={profile.img_src} alt="" />
              <span className='username'>{profile.username}</span>
            </div>
          </Link>
          )}
          <div className='profile'>
              <div className="addProfile icon-sam"></div>
              <span className='username'>Add Profile</span>
            </div>
        </div>
          <Button/>
      </div>
    </div>
  )
}

export default Profile

