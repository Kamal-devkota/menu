export default function Nav({categories,handleClick}){
 console.log(categories)
   return(
 categories.map((btns,index)=>{
  return <button key={index} onClick={()=>handleClick(btns)}>{btns}</button>
 })
 
 
  
   )
}