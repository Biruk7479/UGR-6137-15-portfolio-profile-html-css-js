function showTab(tabId, button) {
    const tabs = document.querySelectorAll('.tab');
  
    tabs.forEach(tab => {
      tab.classList.remove('active-tab');
      tab.style.display = 'none'; 
    });
  
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add('active-tab');
      activeTab.style.display = 'block'; 
    }
  
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
      btn.classList.remove('active-button');
    });
  
    button.classList.add('active-button');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const skillsTab = document.getElementById('skills');
    if (skillsTab) {
      skillsTab.style.display = 'block';
    }
  
    const firstButton = document.querySelector('.tab-button');
    if (firstButton) {
      firstButton.classList.add('active-button');
    }
  });
  