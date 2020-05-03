import checkPropsTypes from 'check-prop-types'

/**
 * Find elements inside of a component by provided attribute
 * @param component React component
 * @param attr query attribute like className ir id or as `[data-attr='${attr}']`
 * @return {*}
 */
export const findByAttr = (component, attr) => {
    return component.find(attr)
}

/**
 * Check for validity of props in a component
 * @param component React component
 * @param expectedProps Expected propTypes
 * @return {string}
 */
export const checkProps = (component, expectedProps) => {
    return checkPropsTypes(component.PropTypes, expectedProps, "props", component.name)
}
