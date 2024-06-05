import createElementUtil from "./utils/createElementUtil";

window.addEventListener('load', () => {
    const title = createElementUtil('h1', {
        className: 'title',
        id: 'page-title',
        textContent: 'Trying github features',
    });

    document.body.append(title);
});

