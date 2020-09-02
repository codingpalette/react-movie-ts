import * as React from 'react';

import { useState, useCallback } from 'react';

export default (initialValue:any = null) => {
    const [value, setValue] = useState(initialValue);

    const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }, [])
    return [value, handler, setValue]
}
