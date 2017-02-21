# Router

- Needs to be isomorphic but REACT router has it's issue and doesn't work well for these type of apps
 - still feels stateless
 
- We need a way to declare routes via express/client but still have it be declare in a more
 declarive manner than react router, so we can have a somewhat extensible routing system,
 without knowing the routes up-front at all.
 
 
- We also need middleware, that is applicable across the entire app.




 Need alternatives. This is the closest thing I could find, looks really damn close to what we need.
 - http://router5.github.io/ seems interesting
   - It also has it's own plugin system, which would suck to have a different plugin for routing
    but that can also be a good thing, not something we have to worry about and they have good docs.

 - When we get to the react park for router5 is still not ideal, maybe I just need to reed more.
  TODO: read more and attempt to consilidate routes, just want an express like router for client,
   but still with state :'-(
   
   


We can start with server side initial redering, and no react routing idk,


