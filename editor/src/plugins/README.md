# Plugins Directory

All pre-packaged plugins belong here

- npm plugins will be loaded from NPM


## Needed
 a plugin file definition
 - allow for npm "next" key to import ES6+ js over ES5< JS, RollUP has a readme explaining this
 - allow for eacy plugin development, that we don't want to include via npm (or use npm link??)
 - do we want to allow being include as a "lib" -- I don't think it's worth it right now
 
 - 

## Plugin definition
Just thinking of random stuff.

```
  {
    "name": "",
    "type": "",
    "group": "",
    "events": ["e1", "e2"],
    "main": ""
  }
```


## Need a way of disabling, enabling plugins via config

Just thinking of more random stuff.

```
 {
   "disabled": [],
   "enabled": []
 }
```