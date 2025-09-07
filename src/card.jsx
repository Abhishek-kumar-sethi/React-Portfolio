import './home-content.css'
function Card({title,para,date,folder}){
    return(
        <div className='card'>
            <h3>{title}</h3>
            <p>{para}</p>
            <div>
                <span><i class="fa-solid fa-calendar-days"></i><span>{date}</span></span>
                <span><i class="fa-regular fa-folder-open"></i><span>{folder}</span></span>
            </div>
        </div>
    )
}
export default Card;