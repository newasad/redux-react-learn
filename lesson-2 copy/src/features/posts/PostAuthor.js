import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllUsers } from '../users/usersSlice';



const PostAuthor = ({ userId }) => {

    const users = useSelector(selectAllUsers);

    const author = useMemo(()=> users.find(user=> parseInt(user.id) === userId),[userId, users])

  return (<>
    <span>by {author ? <Link to={`/user/${userId}`}>{author.name}</Link> : 'Unknown author'}</span>
  </>
  )
}

export default PostAuthor