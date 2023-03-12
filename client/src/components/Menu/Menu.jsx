import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ posts }) => {
    return (
        <>
            <h1>Other post you may like</h1>
            {
                posts?.map(post => (
                    <div className="likepost" key={post.id}>
                        <img src={`/uploads/${post.image}`} alt={post.title} className="likePostImg" />
                        <h2>{post?.name}</h2>
                        <Link to={`/posts/${post.id}`}>
                            <button>Read More</button>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Menu;