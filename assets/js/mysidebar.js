(function() {
    // Wait for document to be fully loaded and parsed
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeSidebar);
    } else {
      initializeSidebar();
    }
  
    function initializeSidebar() {
      try {
        const sidebar = document.getElementById('sidebar');
        const toggleButton = document.getElementById('sidebar-toggle');
        const spacer = document.querySelector('.spacer');
        const icon = toggleButton.querySelector('i');
        const root = document.documentElement;
  
        // Ensure all elements exist before proceeding
        if (!sidebar || !toggleButton || !spacer || !icon) {
          console.error('Required elements not found');
          return;
        }
  
        // Load saved state
        const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        updateSidebarState(isCollapsed);
  
        // Add click handler
        toggleButton.addEventListener('click', function() {
          const willBeCollapsed = !sidebar.classList.contains('sidebar-collapsed');
          updateSidebarState(willBeCollapsed);
        });
  
        function updateSidebarState(collapsed) {
          if (collapsed) {
            sidebar.classList.add('sidebar-collapsed');
            spacer.style.display = 'block';
            root.style.setProperty('--sidebar-width', '80px');
            icon.classList.remove('fa-angles-left');
            icon.classList.add('fa-angles-right');
          } else {
            sidebar.classList.remove('sidebar-collapsed');
            spacer.style.display = 'none';
            root.style.setProperty('--sidebar-width', '260px');
            icon.classList.remove('fa-angles-right');
            icon.classList.add('fa-angles-left');
          }
          localStorage.setItem('sidebarCollapsed', collapsed);
        }
      } catch (error) {
        console.error('Error initializing sidebar:', error);
      }
    }
  })();