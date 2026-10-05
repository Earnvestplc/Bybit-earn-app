(() => {
  const pages = [...document.querySelectorAll('.page')];
  const show = id => { pages.forEach(page => page.classList.toggle('active', page.id === id)); window.scrollTo(0, 0); };
  const link = (selector, target) => document.querySelectorAll(selector).forEach(el => el.addEventListener('click', () => show(target)));
  link('#deposit-fiat-btn', 'select-payment-page'); link('#withdrawal-fiat-btn', 'fiat-withdrawal-page'); link('#transfer-btn', 'transfer-page'); link('#convert-btn', 'convert-page'); link('#buy-crypto-btn,#sell-crypto-btn', 'buy-sell-crypto-page');
  link('#deposit-pix-option', 'deposit-pix-value-page'); link('#deposit-usdt-option', 'deposit-usdt-page');
  document.querySelectorAll('.back-button').forEach(button => button.addEventListener('click', () => show('my-assets-page')));
  document.querySelectorAll('[data-target]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.transfer-section').forEach(section => section.classList.remove('active')); document.getElementById(button.dataset.target)?.classList.add('active'); }));
  document.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active')); button.classList.add('active'); }));
  const amount = document.getElementById('pix-deposit-amount'); const total = document.getElementById('total-pay-value'); const summary = document.getElementById('deposit-amount-summary');
  amount?.addEventListener('input', () => { const value = Number(amount.value.replace(',', '.')) || 0; if (summary) summary.textContent = value.toFixed(2); if (total) total.textContent = value.toFixed(2); });
  document.getElementById('confirm-deposit-btn')?.addEventListener('click', () => { const value = document.getElementById('deposit-amount-summary')?.textContent || '0.00'; document.querySelectorAll('#pix-deposit-amount-qr,#pix-total-amount-qr').forEach(el => el.textContent = value); show('deposit-pix-qr-page'); });
  document.getElementById('deposit-completed-btn')?.addEventListener('click', () => show('my-assets-page')); document.getElementById('deposit-usdt-done-btn')?.addEventListener('click', () => show('my-assets-page'));
  document.getElementById('save-qr-to-photo-btn')?.addEventListener('click', () => document.getElementById('saved-photo-modal')?.classList.add('active')); document.querySelector('.close-modal-button')?.addEventListener('click', () => document.getElementById('saved-photo-modal')?.classList.remove('active'));
  document.querySelectorAll('.theme-btn').forEach((button, index) => button.addEventListener('click', () => { document.body.classList.toggle('dark', index === 1); document.querySelectorAll('.theme-btn').forEach(item => item.classList.remove('active')); button.classList.add('active'); }));
  document.querySelectorAll('.copy-icon').forEach(button => button.addEventListener('click', async () => { const target = button.previousElementSibling; if (target) await navigator.clipboard?.writeText(target.value || target.textContent || ''); }));
  const clock = document.getElementById('last-update-time'); const tick = () => { if (clock) clock.textContent = new Date().toLocaleTimeString('pt-BR'); }; tick(); setInterval(tick, 1000);
})();
