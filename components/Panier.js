import React from 'react';
import styles from '../styles/Panier.module.css';
import Header from './Header';
import { useSelector } from 'react-redux';
import Article from './Article';
function Panier() {


  const panier = useSelector((state)=> state.panier.value)

  let total = 0;

  for (let i = 0; i < panier.length; i++) {
   total  += panier[i].price
  }


 
  let articlesPanier = panier.map((article,i)=>{
    return <Article key={i} name={article.name} price={article.price} urlImage={article.urlImage} />
  })

  return (
    <div className={styles.container}>
        <Header/>
        {articlesPanier}
        <div className={styles.total}>
          <p>Total: {total} € </p>
        </div>
    </div>
  );
}

export default Panier;
