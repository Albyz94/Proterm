


function CreateImage() {
    
    return (
        <div>
            {Array.from({length:7}.map((_, index)=> 
            <Image key={index}/>
            ))}
        </div>
        
    )

}

{/* <Image
        imgName={"img1"}
        img={"/img/1.png"}
      /> */}

function Image(props) {
    
    return (
        <img className={props.imgName} src={props.img} alt="" />
    )

}




function Logo(props) {
    return (
        <div className={props.imgDivName}>
            <img className={props.imgName} src={props.img} alt="" />
        </div>
    )
}


export {Image, Logo};