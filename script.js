
function showPage(pageId, element) {

    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.classList.remove('active');
    });

    element.classList.add('active');

    const titles = {
        dashboard: 'Dashboard',
        schedule: 'Class Schedule',
        grades: 'Grades',
        announcements: 'Announcements',
        profile: 'Student Profile'
    };

    document.getElementById('pageTitle').textContent = titles[pageId];
}

const today = new Date();

document.getElementById('currentDate').textContent =
    today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
