import React from 'react'
import styles from "../styles/Header.module.css"
import Link from  "next/link"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../reducers/user';
import { removeAllArticle } from '../reducers/panier';

function Header() {

  const user = useSelector((state) => state.user.value); // récuperer l'objet qui represente mon utilisateur 
  const dispatch = useDispatch();

  const handleLogout = () => {
		dispatch(logout());
    dispatch(removeAllArticle());
	};

	let userSection;
	if (!user.token) {
		userSection = (
      <div className={styles.links}>
        <Link href={"/login"}>Se connecter / S'inscrire</Link>
      </div>
		);

	} else {
    userSection = (
      <div className={styles.links}>
        <p>Welcome {user.firstname}</p>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
		);
    }




  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <img src="bike-logo.svg" alt="logo bike" />
        <p>The bike shop Experience</p>
      </div>
      <img className={styles.image} src="bike-background.jpg" alt="background bike" />
      <div className={styles.links}>
         
        <Link href={"/panier"}>Panier</Link>
          {userSection} 
      </div> 
    </div>
  )
}

export default Header
