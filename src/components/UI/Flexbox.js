import React from 'react';
import styled from 'styled-components'
const StyledFlex = styled.div`
width:  ${props => props.width || ''};
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin:${({margin}) => margin || '0'} ;
margin:${({height}) => height || ''} ;
`
const FlexBox = (props) => {
    return <StyledFlex {...props} />
};
export default FlexBox;