import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTiltle }) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTiltle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrumb;