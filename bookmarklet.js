javascript: (function() {
    var letter = prompt('What letter?');
    var color = prompt('What color?');
    var container = document.createElement('div');
    document.body.appendChild(container);
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.overflow = 'hidden';
    container.style.pointerEvents = 'none';

    function init() {
        var injection = document.createElement('style');
        document.body.appendChild(injection);
        injection.innerHTML = '@-webkit-keyframes snow {\nfrom {top:-1%;}\nto{top:121%;}}\n@-moz-keyframes snow {\nfrom {top: -1%;}\nto {top: 121%;}\n}';
    }
    init();
    window.setInterval(createParticle, 200);
    timeChoices = [5, 6, 7, 8, 9, 10];

    function destroy(evt) {
        container.removeChild(evt.target);
    }

    function createParticle() {
        var particle = document.createElement('span');
        var randomSpeed = timeChoices[Math.floor(Math.random() * timeChoices.length)];
        particle.innerHTML = letter;
        particle.className = 'flake';
        particle.style.position = 'absolute';
        particle.style.color = color;
        particle.style.backgroundColor = 'transparent';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.pointerEvents = 'none';
        particle.style.right = Math.random() * 100 + '%';
        particle.style.borderRadius = '50%';
        particle.style.WebkitAnimation = 'snow ' + randomSpeed + 's linear';
        container.appendChild(particle);
        particle.addEventListener('webkitAnimationEnd', destroy);
    }
})()
