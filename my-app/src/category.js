export default function Category(items){
    return(
        <div className="first-item one">
        <div className="image"> <img src={items.photo} alt=""/></div>
        <div className="first-content-info ">
              <div className="sub-first-content-info">
                  <p>{items.title}</p>
                  <p>{items.price}</p>
              </div>
              <p>{items.desc}</p>
              <button className="btn"> GET RECIPE</button>
          </div>
          </div>
    )
}