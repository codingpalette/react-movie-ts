import * as React from 'react';
import { FunctionComponent } from "react";
import styled from "@emotion/styled";
import useInput from "../../hooks/useInput";

const InputArea = styled('div')`

`;

const InputBox:FunctionComponent = () => {
    const [value, onChangeValue, setValue] = useInput('');
    return(
        <>
            <InputArea>
                <input type="text" value={value} onChange={onChangeValue} />
            </InputArea>
        </>
    )
};

export default InputBox;
