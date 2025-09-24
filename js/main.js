// Show/Hide Comments (accessible)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.show-hide');
  const panel = document.getElementById('comments-panel');
  const form = document.querySelector('.comment-form');
  const list = document.querySelector('.comment-container');
  const nameField = document.getElementById('name');
  const commentField = document.getElementById('comment');

  if (btn && panel) {
    // Initial state
    panel.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = 'Show comments';

    function toggleComments() {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.textContent = expanded ? 'Show comments' : 'Hide comments';
      panel.hidden = expanded;
    }

    btn.addEventListener('click', toggleComments);

    if (btn.tagName !== 'BUTTON') {
      btn.setAttribute('tabindex', '0');
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleComments();
        }
      });
    }
  }

  if (form && list && nameField && commentField) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameValue = nameField.value.trim();
      const commentValue = commentField.value.trim();
      if (!nameValue || !commentValue) return;

      const li = document.createElement('li');
      const nameP = document.createElement('p');
      const commentP = document.createElement('p');
      nameP.textContent = nameValue;
      commentP.textContent = commentValue;

      li.appendChild(nameP);
      li.appendChild(commentP);
      list.appendChild(li);

      nameField.value = '';
      commentField.value = '';
      nameField.focus();
    });
  }
});
