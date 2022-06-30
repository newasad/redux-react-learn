import { useSelector } from "react-redux";
import { getPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const SinglePostPage =() =>{

    const post = useSelector((state)=> getPostById(state,postId));

    if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timeStamp = {post.data}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    )
}


export default SinglePostPage;