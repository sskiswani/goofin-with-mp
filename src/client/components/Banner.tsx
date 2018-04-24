import { complement, lighten, saturate, transparentize } from 'polished';
import styled from 'styled-components';

export const Banner = styled.header.attrs({ color: props => props.color || 'white' })`
  background-color: ${saturate(0.25, '#222')};
  height: 100px;
  padding: 10px 20px;
  margin-bottom: 10px;

  text-align: center;
  line-height: 1.5em;
  font-weight: bolder;
  transition: all 1s ease-out;
  color: ${props => props.color};
  transition: text-shadow 1s ease-in-out;
  text-shadow: 0 0 10px ${props => transparentize(0.3, lighten(0.25, complement(props.color)))};

  h1 {
    font-size: 1.75em;
    margin-top: 0.5em;
    letter-spacing: 6px;
    font-weight: 800;
  }

  h2 {
    font-size: 1.25em;
    font-weight: 800;
    margin: 0.5em auto;
    letter-spacing: 3px;
    color: ${props => complement(props.color)};
    transition: color 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;
