lucide.createIcons();
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.scroll).scrollIntoView({behavior:'smooth'})));
const toast=document.getElementById('toast');
document.getElementById('generate').addEventListener('click',()=>{if(!document.getElementById('prompt').value.trim()){document.getElementById('prompt').focus();return}toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3600)});
