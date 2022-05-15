import React, { useEffect, useState } from 'react'
import styles from "./Home.module.css"

const Cards = () => {
    const [card,setCard] = useState([]);
    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        fetch(" https://unacademy-backend.herokuapp.com/card")
          .then((res) => res.json())
          .then((res) => setCard(res));
      };
  return (
    <div>
            <div className={styles.cardCont}>
                {
                    card.map((item)=>{
                        return(
                            <div className={styles.cont}>
                            <div>
                            <img src={item.image} alt="..."/>
                                <h2 style={{paddingTop:30,paddingLeft:10,color:"#3C4852"}}>{item.title}</h2>
                                <p style={{paddingLeft:10}}>{item.paragraph}</p>
                            </div>
                                
                            </div>
                        )
                    })
                }  
            </div>
    </div>
  )
}

export default Cards
