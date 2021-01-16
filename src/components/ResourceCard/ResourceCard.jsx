/* 
PSEUDO CODE:
- Import react and link
- Set up resource card component
    - fsc as we are not setting state
    - pass props. Use destructuring -(user, resource, ..)
    - Return resource props for link, title, description, and tags
    - Create a button to save a resource
        - set onClick event for addToCollection function which should be passed in as props
        - pass specific resource id
    - Create a button for upvotes
        - set onClick event for upvote function which should be passed as props
        - pass specific resource id
*/

import React from 'react'
import {Link} from 'react-router-dom'

const ResourceCard = ({resource, handleDeleteResource}) => {
    return (
        <>
        <h1>{resource.title}</h1>
        <a href={resource.url}>Go to Resource</a>
        <a href="#">Details</a>
        <button type='submit' onclick={() =>  handleDeleteResource()}>Delete</button>
        </>
    );
}
 
export default ResourceCard;