import React from 'react'
import styles from "../styles/Article.module.css"
import { useDispatch, useSelector } from 'react-redux'
import  {addArticle} from "../reducers/panier"

function Article(props) {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value); // récuperer l'objet qui represente mon utilisateur

  const handleAddArticle = () => {
    if (!user.token) {
      return
    } else {
        fetch(`http://localhost:3000/users/canPanier/${user.token}`)
        .then(response => response.json())
        .then(data => {
          dispatch(addArticle(props))
          })
        }		
      }


  return (
    <div className={styles.article}>
        <img src={props.urlImage} alt={props.name} />
        <p>{props.name}</p>
        <div className={styles.choices}>
            <p>{props.price} €</p>
            <button onClick={() => handleAddArticle()}>Buy</button>
        </div>
    </div>
  )
}

export default Article
