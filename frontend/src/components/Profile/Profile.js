import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { fetchUser, deleteUser, logout } from '../../store/session';
import ProfileEvent from './ProfileEvent';
import Button from 'react-bootstrap/Button';
import Footer from '../NavBar/Footer';
import './Profile.scss';
import defaultImage from '../../assets/images/sarah_norton.jpeg';

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch]);

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
    history.push(`/`)
  };

  const deleteProfile = e => {
    if (user._id !== '6371a9a2386c814c8c4af77c') {
      if (window.confirm("Are you sure? Deleting a profile is irreversible.")) {
        dispatch(deleteUser(user.id));
        logoutUser(e);
      };
    } else {
      alert('You cannot delete the precious demo user!')
    }


  }

  return (
    <section className='profile_page'>
      <div className="profile_wrapper flex-col">
        <h1 className='text-center'>Profile</h1>
        <div className="profile_content flex-row justify-between align-center">
          <div className='flex-row align-center'>
            <div className="profile_details flex-row justify-center align-center">
              <picture>
                <img className='profile-photo' src={user.image ? user.image : defaultImage} 
                  alt='user_images'
                  onError={e => {
                    e.target.src={defaultImage}
                    e.onerror=null
                  }}
                  />
              </picture>
              <div className="user_details">
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
                <p className="join">Joined in {user.createdAt}</p>
                <p className='delete'
                  onClick={deleteProfile}>
                  Delete profile
                </p>
              </div>
            </div>
            <div className="profile_link flex-col align-end">
              <Link to={'/events/new'}><Button>Create event</Button></Link>
              <Link to={'/events'}><Button>Find events to join</Button></Link>
            </div>
          </div>
        </div>
        {/* <div className='border'></div> */}
        {/* <ProfileEvent /> */}
      </div>
      <Footer />
    </section>
  )
}

export default Profile;