import React from "react";

function Person({age, hobbies, name}){
    const MAX_NAME_LENGTH_TO_SHOW = 6;

    const voteText = age > 18
        ?"Go Vote!"
        :"Got Study!"

    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
    return(
        <div>
        <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
                <li>Age: {age}</li>
                <ul>
                Hobbies:
                {hobbiesLIs}
                 </ul>
            </ul>
      <h3>{voteText}</h3>
        </div>
    )
}

export default Person