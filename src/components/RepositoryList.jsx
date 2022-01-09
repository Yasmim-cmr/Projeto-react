import React from "react";
import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList(props) {
    const [repositories, setRepositories] = useState([]) // sempre começar o usestate com o mesmo que é armazenado na constante 
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []) // dependencias do useeffect quando as informações mudarem o que o useEffect vai mostrar
    //não deixar sem o segundo parãmetro o useEffect
    //

    return (
        <section className="repository-list">
            <h1>
                Lista de repositórios
            </h1>
      
            <ul>
                {repositories.map(repository=>{//propriedade key 
                    return      <RepositoryItem key={repository.name} repository={repository}/>
                })}
       
           
            </ul>
        </section>
    )
}