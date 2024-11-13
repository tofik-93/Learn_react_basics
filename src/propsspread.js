const myComponent = (props) =>{
    return(
       <div>
        <h1>Hello, {props.name}</h1>
        <p>Age: {props.age}</p>
        <p>Gender:{props.gen}</p>
        </div>
    )
}
const Prop =() => {
    const user = {name:'tofik', age:23, gen:'male'}
  return <myComponent {...user}/>
}
export default myComponent;