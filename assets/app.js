document.addEventListener('DOMContentLoaded', function() {
    const Year = new Date().getFullYear();
    document.querySelector('.copyright-footer').innerHTML = `Mart Haamer &copy; ${Year}`;

    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('animate__animated', 'animate__fadeOutUp');
        } else {
            navbar.classList.remove('animate__fadeOutUp');
            navbar.classList.add('animate__fadeInDown');
        }
        lastScrollTop = scrollTop;
    });

    const profileImage = document.getElementById('profileImage');
    let timeout;

    profileImage.addEventListener('mousedown', function() {
        if (profileImage.classList.contains('animate__shakeX') || profileImage.classList.contains('animate__bounce') || profileImage.src.includes('pilt-2.jpg')) {
            return;
        }

        timeout = setTimeout(() => {
            profileImage.classList.remove('animate__shakeX');
            profileImage.style.setProperty('--animate-duration', '1s');

            profileImage.classList.add('animate__animated', 'animate__wobble');
            profileImage.style.cursor = 'default';
            profileImage.src = 'assets/pilt-2.jpg';
        }, 5000);

        profileImage.classList.add('animate__animated', 'animate__shakeX');
        profileImage.style.setProperty('--animate-duration', '5s');

        profileImage.style.cursor = 'wait';
    });

    profileImage.addEventListener('mouseup', function() {
        clearTimeout(timeout);
        profileImage.style.cursor = 'default';
        profileImage.classList.remove('animate__shakeX');
    });

    profileImage.addEventListener('mouseleave', function() {
        clearTimeout(timeout);
        profileImage.style.cursor = 'default';
        profileImage.classList.remove('animate__shakeX');
    });
});