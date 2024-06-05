

const createElementUtil = (tagName, attributes = {}) => {
    const element = document.createElement(tagName);

    return Object.assign(element, attributes);
};

export default createElementUtil;

