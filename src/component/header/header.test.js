import React from "react";
import { shallow } from 'enzyme'
import Header from "./index";
import { findByAttr } from "./../../../Utils/index"

const headerComponentClassName = '.headerComponent'

const setUp = (props={}) => {
    return shallow(<Header {...props}/>)
}

describe("Header Component", () => {
    let component
    beforeEach(() => {
        component = setUp()
    })

    it("should render without errors", () => {
        const wrapper = findByAttr(component, headerComponentClassName)
        expect(wrapper.length).toBe(1)
    })

    it("should render a logo", () => {
        const  logo = findByAttr(component, headerComponentClassName)
        expect(logo.length).toBe(1)
    })
})
