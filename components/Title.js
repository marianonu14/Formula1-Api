const Title = (props) => {
    return ( 
        <div>
            <h1 className="px-20 py-10">{props.title}</h1>
            <p className="text-center text-xl md:text-2xl p-10">{props.info}</p>
        </div>
     );
}
 
export default Title;