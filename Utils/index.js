/**
 * Find elements inside of a component by provided attribute
 * @param component React component
 * @param attr query attribute like className ir id or as `[data-attr='${attr}']`
 * @return {*}
 */
export const findByAttr = (component, attr) => {
    return component.find(attr)
}
