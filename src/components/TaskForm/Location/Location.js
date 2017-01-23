import * as React from 'react';

import { Label } from '../';

function Location(props) {
    return (
        <div className="wrapper">
            <Label text={'LOCATION'}/>
            <input onKeyUp={props.handleLocationChange} type="text" />
        </div>
    )
}

export default Location;