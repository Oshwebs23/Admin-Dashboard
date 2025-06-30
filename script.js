
function addHoverEffect1() {
    const gridItems = document.querySelectorAll('.grid-item1');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
};

function addHoverEffect2() {
    const gridItems = document.querySelectorAll('.grid-item2');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
};

function addHoverEffect3() {
    const gridItems = document.querySelectorAll('.grid-item3');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
};

function addHoverEffect4() {
    const gridItems = document.querySelectorAll('.grid-item4');

    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
};

addHoverEffect1();
addHoverEffect2();
addHoverEffect3();
addHoverEffect4();
