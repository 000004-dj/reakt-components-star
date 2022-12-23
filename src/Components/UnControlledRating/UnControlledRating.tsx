import React, {useState} from 'react';
import UnControlledStar from './UnControlledStar'

export const UnControlledRatingUsable = React.memo(UnControlledRating)

 function UnControlledRating() {

    let [value, setValue] = useState(0)
    return (
        <div>
            <UnControlledStar selected={value > 0} setValue={setValue} value={1}/>
            <UnControlledStar selected={value > 1} setValue={setValue} value={2}/>
            <UnControlledStar selected={value > 2} setValue={setValue} value={3}/>
            <UnControlledStar selected={value > 3} setValue={setValue} value={4}/>
            <UnControlledStar selected={value === 5} setValue={setValue} value={5}/>
        </div>
    )

}
