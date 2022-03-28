const btnMob = document.getElementById('btnmob');
        
        function menuMob(){
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
        
        }
        btnMob.addEventListener('click', menuMob);