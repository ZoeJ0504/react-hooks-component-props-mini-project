import React from "react"
import Article from "./Article";

function ArticleList(props){
    return(
        <main>
            {props.posts.map(post => (
                <Article
                key={post.id} 
                title={post.title}
                preview={post.preview}
                date={post.date}
                />
            ))}
        </main>
    )
}
export default ArticleList;