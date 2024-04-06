/*Queueing a Series of State Updates:
In the context of React or other state management systems,
 "queueing" refers to the process of scheduling a series of 
 state updates to occur one after another in the order they 
 were enqueued, rather than immediately applying each update 
 as it comes.



 Queueing a Series of State Updates
Setting a state variable will queue another render. 
But sometimes you might want to perform multiple operations 
on the value before queueing the next render. To do this, 
it helps to understand how React batches state updates.





It is an uncommon use case, but if you would like to update the same state variable multiple times before the next render, instead of passing the next state value like setNumber(number + 1), you can pass a function that calculates the next state based on the previous one in the queue, like setNumber(n => n + 1). It is a way to tell React to “do something with the state value” instead of just replacing it.
*/