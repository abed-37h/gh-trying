import createElementUtil from "./utils/createElementUtil";

window.addEventListener('load', () => {
    const title = createElementUtil('h1', {
        className: 'title',
        id: 'page-title',
        textContent: 'Trying github features',
    });
    
    const description = createElementUtil('p', {
        className: 'description',
        textContent: 'This is just a project to try github feature before using them in real one and break it.',
    });

    document.body.append(
        title,
        description,
    );
});

