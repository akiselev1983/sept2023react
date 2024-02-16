
const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'

const urls = {
    users:{
        base: users,
        byId: (id) => `${users}/${id}`,
        postsByUserId:(id) => `${users}/${id}/posts`
    },
    posts:{
        base: posts,
        byId: (id) => `${posts}/${id}`,
        byCommentsPostId:(id)=> `${posts}/${id}/comments`
    }
}
export {baseURL, urls}