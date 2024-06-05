import createElementUtil from "./utils/createElementUtil";

window.addEventListener('load', () => {
    const title = createElementUtil('h1', {
        className: 'title',
        id: 'page-title',
        textContent: 'Trying github features',
    });
    
    const description = createElementUtil('p', {
        className: 'description',
        textContent: 'This project is just a test to try git and/or github features before using them in real projects and break them.',
    });

    document.body.append(
        title,
        description,
    );
});

