
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const panelId = tab.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        
        panels.forEach((p) => {
            p.hidden = true;
        });
        
        panel.hidden = false;
    });
});
