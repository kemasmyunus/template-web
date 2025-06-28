function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('expanded'));
        document.querySelectorAll('.submenu-toggle').forEach(toggle => {
            toggle.classList.remove('expanded');
            toggle.classList.add('collapsed');

            const arrowIcon = toggle.querySelector('.arrow i');
            if (arrowIcon) {
                arrowIcon.classList.remove('fa-angle-down');
                arrowIcon.classList.add('fa-angle-right');
            }
        });
    }
}

function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    const arrowIcon = element.querySelector('.arrow i');

    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');

    if (submenu.classList.contains('expanded')) {
        // TUTUP submenu
        submenu.style.maxHeight = null;
        submenu.classList.remove('expanded');

        if (arrowIcon) {
            arrowIcon.classList.remove('fa-angle-down');
            arrowIcon.classList.add('fa-angle-right');
        }
    } else {
        // BUKA submenu
        submenu.classList.add('expanded');
        submenu.style.maxHeight = submenu.scrollHeight + "px";

        if (arrowIcon) {
            arrowIcon.classList.remove('fa-angle-right');
            arrowIcon.classList.add('fa-angle-down');
        }
    }
}

