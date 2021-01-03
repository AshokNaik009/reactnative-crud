import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blogReducer = (state,action) =>{
  switch(action.type) {

    case 'delete_blogpost':
      return  state.filter((blogPost)=> blogPost.id !== action.payload)

    case 'add_blogpost':
      return [...state,{id:Math.floor(Math.random() * 9999), title:`Blog Post #${state.length + 1}`}];
    default:
      return state;
  }

}

// export const BlogProvider = ({ children }) => {
//    const [blogPosts , dispatch] = useReducer(blogReducer,[])

   const addBlogPost = (dispatch) => {
     return () => {
     dispatch({type:'add_blogpost'})
     }; 
   }

   const deleteBlogPost = (dispatch) => {
    return (id) => {
    dispatch({type:'delete_blogpost',payload:id})
    }; 
  }
//   return <BlogContext.Provider value={{data:blogPosts,addBlogPost}} >{ children }</BlogContext.Provider>;
// };

export const {Context,Provider} = createDataContext(blogReducer,{addBlogPost,deleteBlogPost},[]);