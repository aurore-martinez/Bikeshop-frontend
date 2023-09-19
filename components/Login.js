import React from 'react';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';


function Login (){

  const router = useRouter();

  const dispatch = useDispatch();

  const [signInEmail, setSignInEmail] = useState('');
const [signInPassword, setSignInPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpFirstname, setSignUpFirstname] = useState('');


  const handleLogin = () => {

  
    // router.push('/') = redirige vers la page Home

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: signInEmail, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				console.log("data fetch signin",data.result);
				if (data.result) {
					dispatch(login({ firstname: data.firstname, email: signInEmail, token: data.token}));
					setSignInEmail('');
					setSignInPassword('');
          router.push('/')
				}
			});
	};

  const handleRegister = () => {

    // redirige vers la page Home


		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname:signUpFirstname, email: signUpEmail, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				console.log("data fetch signup",data);
				if (data.result) {
					dispatch(login({firstname:signUpFirstname, email: signUpEmail, token: data.token}));
					setSignUpEmail('');
					setSignUpPassword('');
          setSignUpFirstname('');
          router.push('/')
				}
			});
	};


  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h2>Inscription</h2>
        <input type="text" placeholder="Prénom" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}/>
        <input type="email" placeholder="Email" onChange={(e) => setSignUpEmail(e.target.value)} value={signUpEmail}/>
        <input type="password" placeholder="Mot de passe" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
        <button onClick={handleRegister}>S'inscrire</button>
      </div>

      <div className={styles.formContainer}>
        <h2>Connexion</h2>
        <input type="email" placeholder="Email" onChange={(e) => setSignInEmail(e.target.value)} value={signInEmail}/>
        <input type="password" placeholder="Mot de passe" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword}/>
        <button onClick={handleLogin}>Se connecter</button>
      </div>
    </div>
  );
};

export default Login;
