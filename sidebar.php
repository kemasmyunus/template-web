<aside class="sidebar">
    <ul class="menu">
        <li class="menu-item">
            <a href="index.php">
                <div class="menu-link-content">
                    <span class="icon"><i class="fas fa-home"></i></span>
                    <span class="text">Beranda</span>
                </div>
            </a>
        </li>

        <li class="menu-item has-submenu">
            <div class="submenu-toggle collapsed" onclick="toggleSubmenu(this)">
                <div class="menu-link-content">
                    <span class="icon"><i class="fas fa-folder"></i></span>
                    <span class="text">Data</span>
                    <span class="arrow"><i class="fas fa-angle-right"></i></span>
                </div>
            </div>
            <ul class="submenu">
                <li><a href="pages/halaman1.php">Halaman 1</a></li>
                <li><a href="#">Halaman 2</a></li>
            </ul>
        </li>

        <li class="menu-item">
            <a href="pages/catatan.php">
                <div class="menu-link-content">
                    <span class="icon"><i class="fas fa-sticky-note"></i></span>
                    <span class="text">Catatan</span>
                </div>
            </a>
        </li>

        <li class="menu-item">
            <a href="logout.php">
                <div class="menu-link-content">
                    <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                    <span class="text">Logout</span>
                </div>
            </a>
        </li>
    </ul>
</aside>
