## This is a simple project to react toast notifications w/ redux

to use it just wrap the alert with the AlertContainer
the alert takes two argument and alert type and alert msg,
this proyect can be build w/ context api.

### alert types
1. error
2. warning,
3. check_circle,
4. info

# Dependencies
```bash
    yarn add uuid react-transition-group redux-thunk redux react-redux redux-devtools-extension
```
for the icons i'm using material-icons from google
[https://material.io/resources/icons/]


### how to set the alert 

```javascript
    import React from 'react'
    import PropTypes from 'prop-types'
    import { connect } from 'react-redux'
    import { setAlert } from '../actions/alertAction'
    import { AlerContainer } from './components/alertContainer'
    import Alert from './components/Alert'

    const App = ({setAlert}) => {
        const errorAlert = () => setAlert('error', 'ups something went wrong')

        return (
            <AlrtConatiner>
                <Alert />
            </AlertContainer>
        )
    }
    Counter.propTypes = {
        setAlert: PropTypes.func.isRequired,
    }
    export default connect(null, {setAlert})(App)
```

# scripts 
```bash
    yarn start      
```
to run the developer server
#
```bash
    yarn build
```
to make a production build

