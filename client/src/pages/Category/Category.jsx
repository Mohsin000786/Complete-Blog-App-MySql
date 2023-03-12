import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Category.scss'

const Category = () => {
  return (
    <div className="category">
        <Sidebar />
        <div className="contents">
            <div className="categories">
                <div className="cat">
                    <h3>Art</h3>
                    <span className='link'>View</span>
                    <span className='link'>edit</span>
                    <span className='link'>delete</span>
                </div>
                <div className="cat">
                    <h3>Science</h3>
                    <span className='link'>View</span>
                    <span className='link'>edit</span>
                    <span className='link'>delete</span>
                </div>
                <div className="cat">
                    <h3>Technology</h3>
                    <span className='link'>View</span>
                    <span className='link'>edit</span>
                    <span className='link'>delete</span>
                </div>
                <div className="cat">
                    <h3>Cinema</h3>
                    <span className='link'>View</span>
                    <span className='link'>edit</span>
                    <span className='link'>delete</span>
                </div>
                <div className="cat">
                    <h3>Food</h3>
                    <span className='link'>View</span>
                    <span className='link'>edit</span>
                    <span className='link'>delete</span>
                </div>
                <div className="cat">
                    <h3>Design</h3>
                    <span className='link'>View</span>
                    <span className='link'>edit</span>
                    <span className='link'>delete</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category