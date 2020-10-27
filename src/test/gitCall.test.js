import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import {makeCall} from '../components/SearchBar.ctrl'
import {SearchBar} from '../components/SearchBar'
import App from '../App'
import * as sinon from 'sinon'
import { expectation, stub } from 'sinon';

describe('should render elements', ()=>{

    let component
    let stubCall

    // beforeAll(()=>{
    //     component = render(<SearchBar/>)
    //     stubCall = sinon.stub(SearchBar, 'makeCall')
    //     stubCall.returns([])

    // })
    // it('makeCall should be triggered', async()=>{
    //     console.log(component, stubCall)
    //     const inputField = await component.findByAltText('searchBar')
    //     fireEvent.change(inputField, {target:{value: 'soniaortiz'}})
    //     // expect(stubCall).toHaveBeenCalled()
    //     console.log(stubCall, '*****')
    // })
})