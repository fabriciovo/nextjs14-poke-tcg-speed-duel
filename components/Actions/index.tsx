import styles from "./actions.module.css";
import { useAppContext } from "@/context";


const ActionMainPokemon = () =>{ 

  return (<>Main Pokemon Card</>)
}

const ActionItemCard = () => {

  return (<>Item Card</>)
}

const Actions = () => {
  const { card } = useAppContext();


  const renderAction = () =>{
    if(card.type === "item"){

    } else if(card.type === "pokemon"){
      
    }
  }

  if (!card) return null;
  return ;
};

export default Actions;
