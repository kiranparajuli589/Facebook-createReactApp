import React from "react";
import { shallow } from "enzyme"
import HeadLine from "./index"

import { findByAttr } from "../../../Utils"

const headlineComponentClassName = ".headlineComponent"
const headerClassName = ".header"
const descriptionClassName = ".description"
const setUp = (props={}) => {
    return shallow(<HeadLine {...props}/>)
}

describe("Headline Component", () => {
    describe("Have props", () => {
        let component
        beforeEach(() => {
            const props = {
                header: "Test Header",
                desc: "This is first post"
            }
            component = setUp(props)
        })

        it("should render without errors", () => {
            const headlineComponent = findByAttr(component, headlineComponentClassName)
            expect(headlineComponent.length).toBe(1)

        })

        it("should render a H1", () => {
            const h1 = findByAttr(component, headerClassName)
            expect(h1.length).toBe(1)
        })

        it("should render a description", () => {
            const h1 = findByAttr(component, descriptionClassName)
            expect(h1.length).toBe(1)
        })
    })
    describe("Have no props", () => {
        let component
        beforeEach(() => {
            component = setUp()
        })

        it("shouldn't render headline component", () => {
            const headlineComponent = findByAttr(component, headlineComponentClassName)
            expect(headlineComponent.length).toBe(0)

        })

        it("shouldn't render a H1", () => {
            const h1 = findByAttr(component, headerClassName)
            expect(h1.length).toBe(0)
        })

        it("shouldn't render a description", () => {
            const h1 = findByAttr(component, descriptionClassName)
            expect(h1.length).toBe(0)
        })
    })
})
