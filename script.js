// Function to create an animated bubble element
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Randomize the bubble's size and horizontal position
    const size = Math.random() * 40 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    
    // Randomize animation duration and delay for a more natural effect
    bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';
    bubble.style.animationDelay = Math.random() * 5 + 's';
    
    // Append the bubble to the container in the header
    document.getElementById('bubbles').appendChild(bubble);
    
    // Remove the bubble after the animation completes to prevent excessive DOM buildup
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
  
  // Create new bubbles at regular intervals
  setInterval(createBubble, 500);
  
  // Event listener for the "Do Magic" button
  document.getElementById('magicBtn').addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change background colors dynamically
    document.body.style.background = randomColor;
    document.querySelector('header').style.background = 'linear-gradient(135deg, ' + randomColor + ', #000)';
  });
  