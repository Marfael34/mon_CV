function toggleMenu() {
            const menu = document.getElementById('nav-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('absolute', 'top-full', 'left-0', 'bg-green-800', 'w-full', 'py-4', 'px-6', 'shadow-lg');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('absolute', 'top-full', 'left-0', 'bg-green-800', 'w-full', 'py-4', 'px-6', 'shadow-lg');
            }
        }