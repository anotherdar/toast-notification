## This is a simple project to react toast notifications w/ redux

to use it just wrap the alert with the AlertContainer
the alert takes two argument and alert type and alert msg

### alert types
1. error
2. warning,
3. check_circle,
4. info

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

### yarn start
```bash
yarn start
```
to run the developer server

### yarn build 
```bash
yarn build
```
to make a production build

