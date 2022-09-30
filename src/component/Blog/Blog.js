import React from 'react';

const Blog = () => {
    return (
        <div>
                  <div className=' row p-3'>
        <h2 className='text-center mb-5'> Blog Question </h2>
         
        <div className=' col-12  col-lg-4'>
          <div className=' bg-light p-3 rounded my-sm2'>
          <h4 className=' text-center'> How dose React Work?</h4>
          <p className='py-3'>
         <strong>ANS :</strong>  React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes
          </p>
          </div>
        </div>

        <div className=' col-12  col-lg-4 my-3 my-lg-0'>
        <div className=' bg-light p-3 rounded'>
          <h4 className=' text-center'>props and state difference</h4>
          <p className='py-3'>
            <strong>State :</strong>
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.
          </p>
          <p>
            <strong> Props:</strong>
            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
          </p>
          </div>
        </div>

        <div className=' col-12 col-lg-4'>
        <div className=' bg-light p-3 rounded'>
          <h4 className=' text-center'> What else is done without data load useing UseEffect</h4>
          <p className='py-3'>
            <ul>
              <li> updating the DOM</li>
              <li> setting up subscriptions </li>
              <li> timers <strong>etc</strong></li>
            </ul>
          </p>
          </div>
        </div>

      </div>
        </div>
    );
};

export default Blog;