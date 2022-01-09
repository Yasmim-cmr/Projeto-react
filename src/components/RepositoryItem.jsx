import React from "react";




export function RepositoryItem(props){
    return(
   <li>
       <strong>
           {props.repository?.name}
           <p>
               {props.repository.description}
           </p>
       </strong>
        <a href={props.repository.html_url}>
            acessar repositories
        </a>
   </li>
    )
}