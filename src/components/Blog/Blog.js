import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl my-10 font-semibold'>Blog Page</h2>

            <div className='md:mx-32 sm:mx-10'>
                <div className='bg-white p-10 rounded-md mb-20 shadow-lg shadow-slate-800'>
                    <h1 className='text-3xl mb-5'>What is the purpose of react router?</h1>
                    <p>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.</p>

                    <p>     When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router.</p>

                    <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>

                    <p>By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                </div>

                <div className='bg-white p-10 rounded-md mb-20 shadow-lg shadow-slate-800'>
                    <h1 className='text-3xl mb-5'>how does context api works?</h1>
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>

                <div className='bg-white p-10 rounded-md mb-20 shadow-lg shadow-slate-800'>
                    <h1 className='text-3xl mb-5'>What is React useRef and How to Use It?</h1>
                    <p>Web developers work with many programming languages, libraries, and frameworks like React, Angular, Vue, Next, etc. They have changed how we used to interact with the DOM for building websites and applications as now everything is component-based, a built-in feature that these frameworks and libraries provide us. If you are unsure how they change how we interact with the DOM nodes, learn React online with us, where we have provided a specialized course just to get you started with React.

                    </p><p>But there are still many times when we have to interact directly with DOM for some native behavior that we want our apps to have and many a time we prefer using the APIs for that which are also built-in features provided by these frameworks like useState and useReducer which are used for managing local states in React

                    </p><p>These hooks are great and are widely used for managing the local states, but at the cost of being called too often and re-rendering the component every time, they are called to update the function which can sometimes affect the performance of a component. In this blog, we will explain how we can directly interact with DOM to make those native behaviors that we want our apps to have, without re-rendering or calling any API for that matter, with the help of a popular hook useRef. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;