function openForm() {
	  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	  document.getElementById("myForm").style.display = "none";
};

async function registerSW() { 
  if ('serviceWorker' in navigator) { 
    try {
      await navigator.serviceWorker.register('sw.js'); 
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.'); 
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden'); 
  }
}

window.addEventListener('load', e => {
	registerSW(); 
  });