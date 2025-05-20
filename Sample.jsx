import React from 'react';

{/*const Sample = ({ myName, Age, hobby, count })*/} 
const Sample =({count})=> {
    return (
        <div>
            {/*<h1>Welcome {myName}</h1>
            <h1>My age is {Age}</h1>
            <h1>My hobby is {hobby}</h1>*/}
            <h1>The count is {count}</h1>
        </div>
    )
}
export default Sample
