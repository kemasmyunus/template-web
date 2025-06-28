function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        document.querySelectorAll('.submenu').forEach(sm => sm.classList.remove('expanded'));
        document.querySelectorAll('.submenu-toggle').forEach(st => {
            st.classList.remove('expanded');
            st.classList.add('collapsed');
        });
    }
}

function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    submenu.classList.toggle('expanded');

    element.classList.toggle('expanded');
    element.classList.toggle('collapsed');

    const arrowIcon = element.querySelector('.arrow i');
    if (arrowIcon.classList.contains('fa-angle-right')) {
        arrowIcon.classList.remove('fa-angle-right');
        arrowIcon.classList.add('fa-angle-down');
    } else {
        arrowIcon.classList.remove('fa-angle-down');
        arrowIcon.classList.add('fa-angle-right');
    }
}
