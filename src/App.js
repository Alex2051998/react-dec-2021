import {Route, Routes} from "react-router-dom";

import {Layout, PostsComments, PostsDetail, PostsPage, UserPosts, UsersDetail, UsersPage} from "./pages";

import './CSS.css';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UsersDetail/>}>
                        <Route path={'posts'} element={<UserPosts/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostsDetail/>}>
                        <Route path={'comments'} element={<PostsComments/>}/>
                    </Route>
                </Route>
            </Route>


        </Routes>
);
}

export default App;
