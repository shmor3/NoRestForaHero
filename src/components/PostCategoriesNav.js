import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
    {enableSearch && <BlogSearch />}

    {categories.map((category, index) => (
      <Link
        exact="true"
        className="NavLink"
        id="NavLinkfaq"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}
        <Link className="NavLink" id="NavLinkfaq" exact="true" to={`/faq`}>
      Show All
    </Link>
  </div>
)

export default PostCategoriesNav
